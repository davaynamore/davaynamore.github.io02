	;(function(){
		'use strict';
		function createProductList(arr, targetNode) {
			arr.forEach(prod => {
				const item = document.createElement('li');
				item.innerHTML = `
				<span>${prod.name}</span>
				<span>${prod.price}</span>
				<span>${prod.category}</span>
				`;
				targetNode.appendChild(item);
			});
		}

		const PRODUCTS_LIST_NODE = document.querySelector('.products');
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange  = () => {
			if(xhr.readyState  !== 4) return;
			const data = JSON.parse(xhr.responseText);
			const PRODUCTS_LIST = data.products;
			STORAGE.setItem('products', PRODUCTS_LIST);
		}

		xhr.open('GET','http://my-json-server.typicode.com/davaynamore/fakeserver/db', true);
		xhr.send();

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
					STORAGE.setItem('products', data.products);
				});
			}
			)
		.catch(function(err) {
			console.log('Fetch Error :-S', err);
		});

		const STORAGE = localStorage;

		const data = {
			tourists: 93,
			tickets: 30,
			clients: 11567,
			comments: 534
		};

		const tourists = document.querySelector('.tourists');
		let i = 1;
		const interval = setTimeout(function counter(){
			tourists.innerText = i;
			i++;
			if(i > data.tourists) {
				clearInterval(interval);
				return;
			}
			interval = setTimeout(counter, 10);
		}, 10);

	})();