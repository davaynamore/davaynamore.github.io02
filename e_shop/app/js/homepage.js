;(function(){

	const readyToUseProductsSliderName = 'readyToUseSlider';
	const readyToUseProductSliderEvent = new Event(readyToUseProductsSliderName);

	const readyForShowName = 'readyForShow';
	const readyForShowEvent = new Event(readyForShowName);

	const addedToCartEventName = 'addedToCart';
	const addedToCartEvent = new Event(addedToCartEventName);

	const productSlider = document.querySelector('.product-slider');
	const gridNode = document.getElementById('grid');

	const totalAmountNode = document.querySelector('.js-summ');
	let totalAmount = parseInt(totalAmountNode.innerText);

	const carouselItems = document.querySelectorAll('.carousel-item');
	Array.from(carouselItems).forEach((el, i) => {
		if(i === 0) el.classList.add('active');
	});
	const bullets = document.querySelectorAll('.carousel-bullet');
	Array.from(bullets).forEach((el, i) => {
		if(i === 0) el.classList.add('active');
	});

	function StorageHelper(){
		this.storage = localStorage;

		this.get = (key) => {
			return JSON.parse(localStorage.getItem(key));
		}
		this.set = (key, value) => {
			localStorage.setItem(key, JSON.stringify(value));
		}
		this.remove = (key) => {
			localStorage.removeItem(key);
		}
	}

	const Storage = new StorageHelper();

	const initProductSlider = () => {
		const carousel = $('.product-slider');
		carousel.owlCarousel({
			items: 3,
			loop: true,
			nav: true,
			autoplay: true,
			navText: [
			'<span class="arrow-owl arrow-left"></span>',
			'<span class="arrow-owl arrow-right"></span>'
			],
		});
	}

	const createSliderDom = () => {
		productBase = Storage.get('products_offer');
		productBase.forEach((product, idx) => {

			if(product.id === 9) return;

			const sliderItem = document.createElement('div');
			sliderItem.classList.add('product-slider__card');
			sliderItem.innerHTML = `
			<div class="img-wrapper">
			<img src="${product.img_url}" alt="product">
			</div>
			<div class="product-slider__card-info">
			<h5 class="product-card-title">
			${product.title}
			</h5>
			<form class="to_card">
			<input type="hidden" value="${product.id}" name="art">
			<input type="submit" class="product-card-btn" value="shop">
			</form>
			</div>
			`;
			productSlider.appendChild(sliderItem);

		});
		document.dispatchEvent(readyToUseProductSliderEvent);
	}

	const createProductsGrid = () => {
		productBase.forEach((product, idx) => {
			if(idx > 5 || product.id === 9) return;
			const item = document.createElement('div');
			item.classList.add('item');
			item.classList.add('col-4');
			item.innerHTML = `
			<div class="products-grid__item">
			<form class="product-form">
			<div class="img-wrapper">
			<img src="${product.img_url}" alt="product image">
			</div>
			<h3 class="products-grid__item-name">branded name</h3>
			<div class="products-grid__item-info">
			<div class="product-price">
			<span class="js-currency">${product.currency}</span>
			<span class="js-price">${product.price}</span>
			</div>
			<input type="hidden" value="${product.price}" name="price">
			<input type="hidden" value="${product.id}" name="art">
			<input type="submit" class="product-card-btn" value="buy now">
			</div>
			</form>
			</div>
			`;
			gridNode.appendChild(item);
		})
	}

	const formSubmit = () => {
		const productForm = document.querySelectorAll('.product-form');
		Array.from(productForm).forEach(form => {
			form.addEventListener('submit', (e) => {
				e.preventDefault();
				const art = e.target.elements.art.value;
				const price = e.target.elements.price.value;
				const cart = Storage.get('cart');

				if(cart[art]) {
					cart[art].quatnity += 1;
				} else {
					cart[art] = {
						price: price,
						quatnity: 1
					}
				}
				Storage.set('cart', cart);
				document.dispatchEvent(addedToCartEvent);
			})
		});
	}

	function getTotalFromCart(){
		const total = [];
		const cart = Storage.get('cart');
		for(let product in cart) {
			total.push(cart[product].price * cart[product].quatnity);
		}
		return total.reduce((accumulator, currentValue) => accumulator + currentValue);
	}

	function setPriceToCart() {
		totalAmountNode.innerText = totalAmount + getTotalFromCart();
	}

	function cartInit() {
		totalAmountNode.innerText = getTotalFromCart();
	}

	function addListenersToSliderBtn() {
		const forms = document.querySelectorAll('.to_card');
		Array.from(forms).forEach(form => {
			form.addEventListener('submit', (e) => {
				e.preventDefault();
				const art = form.elements.art.value;
				Storage.set('chosen_product', art);
				location.assign("http://localhost:3000/index.html");
			})
		})
	}


	document.addEventListener(readyToUseProductsSliderName, initProductSlider);
	document.addEventListener(addedToCartEventName, setPriceToCart);

	document.addEventListener(readyForShowName, () => {
		createSliderDom();
		createProductsGrid();
		formSubmit();
		setPriceToCart();
		addListenersToSliderBtn();
	});



})();