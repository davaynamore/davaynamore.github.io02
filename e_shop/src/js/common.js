;(function(){

	const productsBaseEventName = 'productBaseReady';
	const productsBaseEvent = new Event(productsBaseEventName);
	const readyToUseProductsBaseName = 'readyToUse';
	const readyToUseEvent = new Event(readyToUseProductsBaseName);
	const readyForShowName = 'readyForShow';
	const readyForShowEvent = new Event(readyForShowName);
	let productBase = null;
	let footerMenu = null;

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

				const cart = Storage.get('cart');
				if(!cart) Storage.set('cart', {});
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
		document.dispatchEvent(readyForShowEvent);
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



	document.addEventListener(productsBaseEventName, getProductsFromStorage);
	document.addEventListener(readyToUseProductsBaseName, readyForShow);
	document.addEventListener(readyForShowName, () => {
		createBottomMenu();
	});



})();



