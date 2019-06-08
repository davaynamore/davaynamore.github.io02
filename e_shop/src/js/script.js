;(function(){

	const productsBaseEventName = 'productBaseReady';
	const productsBaseEvent = new Event(productsBaseEventName);
	const readyToUseProductsBaseName = 'readyToUse';
	const readyToUseEvent = new Event(readyToUseProductsBaseName);
	const readyToUseProductsSliderName = 'readyToUseSlider';
	const readyToUseProductSliderEvent = new Event(readyToUseProductsSliderName);

	const addedToCartEventName = 'addedToCart';
	const addedToCartEvent = new Event(addedToCartEventName);

	let productBase = null;
	let footerMenu = null;
	const totalAmountNode = document.querySelector('.js-summ');
	let totalAmount = parseInt(totalAmountNode.innerText);
	const productSlider = document.querySelector('.product-slider');
	const gridNode = document.getElementById('grid');

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

	const getProducts = (url) => {
		return fetch(url);
	}

	getProducts('https://my-json-server.typicode.com/davaynamore/fakeserver/db')
	.then(
		function(response) {
			if (response.status !== 200) {
				console.log(`Looks like there was a problem. Status Code: ${response.status}`);
				return;
			}

			response.json()
			.then(function(data) {
				let {products, footerMenu} = data;
				Storage.set('products_offer', products);
				Storage.set('footer_menu', footerMenu);
				Storage.set('cart', {});
				document.dispatchEvent(productsBaseEvent);
			});
		}
		)
	.catch(function(err) {
		console.log('Fetch Error :-S', err);
	});

	const getProductsFromStorage = () => {
		productBase = Storage.get('products_offer');
		footerMenu = Storage.get('footer_menu');
		document.dispatchEvent(readyToUseEvent);
	}

	const readyForShow = () => {
		const layout = document.querySelector('.layout');
		document.body.classList.remove('fixed');
		layout.classList.add('hidden');

		console.log(productBase);

		createSliderDom();
		createProductsGrid();
		createBottomMenu();
		formSubmit();
	}

	const carouselItems = document.querySelectorAll('.carousel-item');
	Array.from(carouselItems).forEach((el, i) => {
		if(i === 0) el.classList.add('active');
	});
	const bullets = document.querySelectorAll('.carousel-bullet');
	Array.from(bullets).forEach((el, i) => {
		if(i === 0) el.classList.add('active');
	});

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
			<a class="product-card-btn" href="#">shop</a>
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

	const createBottomMenu = () => {
		const bottomMenu = document.getElementById('bottom-menu-container');
		footerMenu.forEach(item => {

			const menuItem = document.createElement('div');
			menuItem.classList.add('col-3');
			menuItem.classList.add('bottom-menu-js-item');
			const title = document.createElement('h4');
			title.classList.add('bottom-menu__item-title');
			title.innerText = item.title;
			const list = document.createElement('ul');
			list.classList.add('bottom-menu__list');
			item.links.forEach(el => {
				const listItem = document.createElement('li');
				listItem.innerHTML = `
				<a href="#" class="bottom-menu__list-link">${el}</a>
				`;
				list.appendChild(listItem);
			});

			menuItem.appendChild(title);
			menuItem.appendChild(list);
			bottomMenu.appendChild(menuItem);
		});
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

	function setPriceToCart() {
		const total = [];
		const cart = Storage.get('cart');
		for(let product in cart) {
			total.push(cart[product].price * cart[product].quatnity);
		}

		totalAmountNode.innerText = totalAmount + total.reduce((accumulator, currentValue) => accumulator + currentValue);
	}

	document.addEventListener(productsBaseEventName, getProductsFromStorage);
	document.addEventListener(readyToUseProductsBaseName, readyForShow);
	document.addEventListener(readyToUseProductsSliderName, initProductSlider);
	document.addEventListener(addedToCartEventName, setPriceToCart);

})();



