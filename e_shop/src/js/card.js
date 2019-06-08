const readyForShowName = 'readyForShow';

const input = document.querySelector('#input');
const inner = document.querySelector('.inner');
const text = document.querySelector('#text');

input.addEventListener('focus', () => {
	inner.style.opacity = '0';
});

input.addEventListener('blur', () => {
	if(input.value !== '') return;

	inner.style.opacity = '1';

	text.innerText = input.value;
});

input.addEventListener('keypress', (e) => {
	text.innerText = e.target.value;
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


const chosenProduct = Storage.get('chosen_product');
const productBase = Storage.get('products_offer');
const productCard = document.querySelector('.product-card');



function getChosenProduct() {
	const product = productBase.filter(product => product.id == chosenProduct)[0];

	let className = 'product-card-btn';

	if(product.quantity == 0) {
		className = 'btn-danger';
	}

	const productForm = document.createElement('form');

	console.dir(productCard);

	productCard.innerHTML = `
	<form>
	<img src="${product.img_url}" alt="">
	<h2>${product.title}</h2>
	<p>${product.description}</p>
	<p>
	<span>$</span>
	<span>${product.price}</span>
	</p>
	<p>${product.quantity}</p>
	<input type="hidden" name="art" value="${product.id}">
	<input type="submit" id="submit" class="${className}" value="buy">
	</form>
	`;
}


document.addEventListener(readyForShowName, () => {
	getChosenProduct();
});