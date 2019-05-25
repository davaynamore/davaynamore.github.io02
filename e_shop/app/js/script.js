;(function(){

	const menuContentEventName = 'menuReady';
	const menuContentEvent = new Event(menuContentEventName);

	let productsBase = null;

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
	

	const getMenuContent = (url) => {
		return fetch(url);	
	}

	getMenuContent('http://my-json-server.typicode.com/davaynamore/fakeserver/db')
	.then(  
		function(response) {  
			if (response.status !== 200) {  
				console.log(`Looks like there was a problem. Status Code: ${response.status}`); 
				return;  
			}


			response.json()
			.then(function(data) {
				const {footerMenu, menu} = data;
				Storage.set('footer_menu', footerMenu);
				Storage.set('header_menu', menu);
				document.dispatchEvent(menuContentEvent);
			});  
		}  
		)  
	.catch(function(err) {  
		console.log('Fetch Error :-S', err);  
	});

	const getProducts = (url) => {
		return fetch(url);	
	}

	getProducts('http://my-json-server.typicode.com/davaynamore/fakeserver/db')
	.then(  
		function(response) {  
			if (response.status !== 200) {  
				console.log(`Looks like there was a problem. Status Code: ${response.status}`); 
				return;  
			}


			response.json()
			.then(function(data) {
				const {products} = data;
				productsBase = products;
			});  
		}  
		)  
	.catch(function(err) {  
		console.log('Fetch Error :-S', err);  
	});


	document.addEventListener(menuContentEventName, () => {
		const headerMenu = Storage.get('header_menu');
		const footerMenu = Storage.get('footer_menu');
		console.log(headerMenu);
		console.log(footerMenu);
	})


})();