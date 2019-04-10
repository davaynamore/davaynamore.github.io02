;(function IIFE(){


// const textField = document.getElementById('textField');


// console.dir(textField);


// const text = "<h1>I love Bosch</h1>";

// textField.innerHTML = text;


// let admin;
// let name;

// name = 'Vasiliy';

// admin = name;



// console.log(`admin: ${admin}`);


// const ourPlanet = 'Earth';

// const userName = 'Petya';


// const userName = prompt('Type your name', 'User Name');

// const el = document.createElement('h1');

// el.innerText = userName;

// document.body.appendChild(el);

// const form = document.getElementById('form');
// const textField = document.createElement('div');
// document.body.appendChild(textField);


// form.addEventListener('submit', function(event) {
// 	event.preventDefault();

// 	const num_1 = +form.elements.userName.value; // NaN
// 	const num_2 = +form.elements.userPhone.value;

// 	textField.innerText = `${num_1 + num_2}`;
// });


// console.log(typeof 1);
// console.log(typeof 'hello');
// console.log(typeof true); //false
// console.log(typeof NaN);
// console.log(typeof Infinity);
// console.log(typeof function(){});
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof undefined);

// function cubes(){

// 	function init(){
// 		const container = document.createElement('div');
// 		const startBtn = document.createElement('button');

// 		container.classList.add('container');
// 		startBtn.classList.add('btn');

// 		startBtn.innerText = 'Start game';

// 		document.body.appendChild(container);
// 		container.appendChild(startBtn);

// 		startBtn.addEventListener('click', function(){
// 			startBtn.remove();
// 			start();
// 		});
// 	}

// 	function start(){
// 		const btn = document.createElement('button');
// 		const left = document.createElement('div');
// 		const right = document.createElement('div');
// 		const table = document.createElement('div');
// 		const container = document.querySelector('.container');

// 		left.innerText = 0;
// 		right.innerText = 0;
// 		btn.innerText = 'Start';

// 		table.appendChild(left);
// 		table.appendChild(right);
// 		container.appendChild(table);
// 		container.appendChild(btn);

// 		table.classList.add('game_table');
// 		left.classList.add('left');
// 		left.classList.add('cube');
// 		right.classList.add('right');
// 		right.classList.add('cube');
// 		btn.classList.add('btn');

// 		function getRandom(){
// 			return Math.ceil(Math.random() * 6);
// 		}

// 		btn.addEventListener('click', function(){
// 			const randomLeft = getRandom();
// 			left.innerText = randomLeft;
// 			const randomRight = getRandom();
// 			right.innerText = randomRight;
// 		});
// 	}

// 	return {init: init}
// }

// const game = cubes();

// game.init();

// // const userNum = prompt('Type your number', 0);

// const form = document.getElementById('form');
// const textField = document.createElement('div');
// document.body.appendChild(textField);
// textField.innerText = 0;

// form.addEventListener('submit', function(event) {
// 	event.preventDefault();
// 	const num_1 = +form.elements.firstNumber.value; // 8
// 	const num_2 = +form.elements.secondNumber.value; // 15

// 	if(num_1 >= num_2) {
// 		textField.innerText = 'Enter correct values!!!!';
// 		return;
// 	}
// 	let result = null;

// 	do {
// 		result = getRandom(num_2);
// 		console.log(result);
// 	} while(result < +num_1);

// 	textField.innerText = result;

// 	function getRandom(secNum){
// 		return Math.ceil(Math.random() * +secNum);
// 	}
// });


// let answer = prompt('Каково «официальное» название JavaScript?');

// answer = answer.toLowerCase();

// if(answer === 'ecmascript' ) {
// 	alert('Верно!');
// } else {
// 	alert('Не знаете? «ECMAScript»!')
// }

// if (a + b < 4) {
// 	result = 'Мало';
// 	result += ' Davay esche, please'
// } else {
// 	result = 'Много';
// }

// let a = 2;
// let b = 3;

// const result = a + b < 4 ? 'Мало' : a + b === 4 ? 'В точку' : 'Много';

// console.log(result);


// const answer = prompt('Type something');
// console.log(answer);

// undefined = false
// null = false
// 0 = false
// '' = false
// NaN = false

// Infinity = true
// 1 = true
// ' ' = true
// {} = true
// [] = true


// let arr =[1, '2', true, null, '']

// let obj = {
// 	name: 'User',
// 	1: 'Number',
// 	getValue: function(){
// 		return 1;
// 	},
// 	prop: 1
// }

// for( let prop in obj) {
// 	console.log(typeof obj[prop]);
// }





//  function ucFirst(string){
//  	if(!string) return 'Enter the name!';
//  	return `${string.charAt(0).toUpperCase()}${string.substring(1)}`;
//  }


//  console.log(ucFirst('vasya'));
//  console.log(ucFirst(''));


// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// function min(a, b) {
// 	// if(a < b) {
// 	// 	return a
// 	// } else {
// 	// 	return b
// 	// }

// 	// return a < b ? a : b;

// }

// console.log(min(3, 5));

// console.log(min(8, 2));

// console.log(min(4, 4));

// Напишите функцию в которой цикл предлагает prompt ввести число,
// большее заданного аргумента функции (например 100). Если посетитель
// ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число,
// большее 100, либо не нажмёт кнопку Cancel (ESC).

// Предполагается, что посетитель вводит только числа. Предусмотреть обработку
// нечисловых строк в этой задаче


// function getNumber(){
// 	return prompt('Type a number more than 100');
// }

// let answer, isNumber;

// do {

// 	answer = getNumber();
// 	isNumber = Number.isInteger(+answer); //true, false

// 	if(!isNumber) {
// 		alert("Type a number please!");
// 		answer = 0;
// 	}

// } while(+answer <= 100);

// alert('Thank you');



// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
// Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.

// function getPrime(start, end) {

// 	const arr = [];

// 	for(let i = start; i <= end; i++){
// 		if(isPrime(i)) arr.push(i);
// 	}

// 	function isPrime(n) {
// 		if(n < 2) {
// 			return false;
// 		}

// 		for(let i = 2; i < n; i++){
// 			if(n % i === 0) return false
// 		}

// 	return true;
// }
// return arr;
// }


// console.log(getPrime(2, 100));

// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:

// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []

// Обрати внимание: функция не должна изменять переданный ей массив:

// var arr = [1, 2, 3];
// console.log(map(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]


// const arr = [1, 2, 3, 4];

// function square(n) {
// 	return n * n;
// }

// function map1(fn, array){
// 	const newArr = [];
// 	for(let i = 0; i < array.length; i++){
// 		newArr.push(fn(array[i]));
// 	}
// 	return newArr;
// }

// function map2(fn, array){
// 	return array.map(el => fn(el));
// }


// var playList = [
// {
// 	author: "LED ZEPPELIN",
// 	song:"STAIRWAY TO HEAVEN"
// },
// {
// 	author: "QUEEN",
// 	song:"BOHEMIAN RHAPSODY"
// },
// {
// 	author: "LYNYRD SKYNYRD",
// 	song:"FREE BIRD"
// },
// {
// 	author: "DEEP PURPLE",
// 	song:"SMOKE ON THE WATER"
// },
// {
// 	author: "JIMI HENDRIX",
// 	song:"ALL ALONG THE WATCHTOWER"
// },
// {
// 	author: "AC/DC",
// 	song:"BACK IN BLACK"
// },
// {
// 	author: "QUEEN",
// 	song:"WE WILL ROCK YOU"
// },
// {
// 	author: "METALLICA",
// 	song:"ENTER SANDMAN"
// }
// ];

// function showPlayList(data) {
// 	const orderedList = document.createElement('ol');
// 	orderedList.setAttribute('type', 'I');
// 	document.body.appendChild(orderedList);
// 	document.body.style.minHeight = "100vh";
// 	document.body.style.background = "linear-gradient(to right, #ffa17f, #00223e)";
// 	document.body.style.display = "flex";
// 	document.body.style.justifyContent = "center";
// 	document.body.style.alignItems = "center";
// 	orderedList.style.color = "lightgoldenrodyellow";

// 	for(let i = 0;i < data.length;i++) {
// 		const listItem = document.createElement('li');
// 		const link = document.createElement('a');
// 		link.innerText = `${data[i].author} : ${data[i].song}`;
// 		listItem.appendChild(link);
// 		orderedList.appendChild(listItem);
// 	}
// }
// showPlayList(playList);

// Создайте <div>, который при нажатии Ctrl+E превращается в <textarea>.
// Изменения, внесенные в поле, можно сохранить обратно в <div> сочетанием клавиш Ctrl+S, при этом <div> получит в виде HTML содержимое <textarea>.
// Если же нажать Esc, то <textarea> снова превращается в <div>, изменения не сохраняются.

document.addEventListener('DOMContentLoaded', () => {
	const field = (function editingField(){

		const divSize = '500px';
		const styles = {
			width: '100%',
			maxWidth: divSize,
			height: divSize,
			backgroundColor: 'white',
			border: '2px solid red',
			fontWeight: 'bold',
			color: 'black',
			fontSize: '2rem',
			fontFamily: 'Arial, sans-serif'
		}

		let oldContent = '';

		function getOldContent(){
			oldContent = getContentFromArea();
		}

		function createDiv(content = ''){
			getOldContent();
			const divEl = document.createElement('div');
			setStylesToElement(divEl, styles);
			const divContent = document.createElement('p');
			divEl.classList.add('area');
			divContent.classList.add('areaContent');
			divContent.innerText = content;
			divEl.appendChild(divContent);
			document.body.appendChild(divEl);
		}

		function createTextarea(content = ''){
			getOldContent();
			const textareaEl = document.createElement('textarea');
			setStylesToElement(textareaEl, styles);
			textareaEl.classList.add('area');
			document.body.appendChild(textareaEl);
			textareaEl.value = content;
			textareaEl.focus();
		}

		function getContentFromArea(){
			const el = document.querySelector('.areaContent') || document.querySelector('.area');
			if(!el) return;
			return el.innerText || el.value;
		}

		function removeArea(){
			document.querySelector('.area').remove();
		}

		function setStylesToElement(el, styles = {}){
			for(let prop in styles){
				el.style[prop] = styles[prop];
			}
		}

		document.body.addEventListener('keydown', (e) => {
			const keycode = e.keyCode;
			const ctrlKey = e.ctrlKey;
	if(ctrlKey && keycode === 81) { // to textarea: key: "q"
		createTextarea(getContentFromArea());
	removeArea();
}

	if(ctrlKey && keycode === 90){  // changes to div: key: "z"
		createDiv(getContentFromArea());
	removeArea();
}

	if(keycode === 27 && document.body.querySelector('textarea')) { // reset: key: "esc"
		removeArea();
	createDiv(oldContent);
}
})

		return {init: createDiv}
	})();

	field.init();
});







if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this,
		curried = [].slice.call( arguments, 1 ),
		bound = function bound() {
			return fn.apply(
				(!this ||
					(typeof window !== "undefined" &&
						this === window) ||
					(typeof global !== "undefined" &&
						this === global)
					) ? obj : this,
				curried.concat.apply( curried, arguments )
				);
		};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}





})();