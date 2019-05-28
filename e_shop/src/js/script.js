;(function(){

	const productsBaseEventName = 'productBaseReady';
	const productsBaseEvent = new Event(productsBaseEventName);

	const readyToUseProductsBaseName = 'readyToUse';
	const readyToUseEvent = new Event(readyToUseProductsBaseName);
	let productBase = null;

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
				let {products} = data;
				Storage.set('products_offer', products);
				document.dispatchEvent(productsBaseEvent);
			});
		}
		)
	.catch(function(err) {
		console.log('Fetch Error :-S', err);
	});

	const getProductsFromStorage = () => {
		productBase = Storage.get('products_offer');
		document.dispatchEvent(readyToUseEvent);
	}

	const readyForShow = () => {
		const layout = document.querySelector('.layout');
		document.body.classList.remove('fixed');
		layout.classList.add('hidden');
	}

	const carouselItems = document.querySelectorAll('.carousel-item');
	Array.from(carouselItems).forEach((el, i) => {
		if(i === 0) el.classList.add('active');
	});
	const bullets = document.querySelectorAll('.carousel-bullet');
	Array.from(bullets).forEach((el, i) => {
		if(i === 0) el.classList.add('active');
	});

	document.addEventListener(productsBaseEventName, getProductsFromStorage);
	document.addEventListener(readyToUseProductsBaseName, readyForShow);



})();