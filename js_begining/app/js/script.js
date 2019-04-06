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

// const container = document.createElement('div');

// const table = document.createElement('div');
// const left = document.createElement('div');
// left.innerText = 0;
// const right = document.createElement('div');
// right.innerText = 0;
// const btn = document.createElement('button');
// btn.innerText = 'Start';
// table.appendChild(left);
// table.appendChild(right);
// document.body.appendChild(container);
// container.appendChild(table);
// container.appendChild(btn);
// table.classList.add('game_table');
// left.classList.add('left');
// left.classList.add('cube');
// right.classList.add('right');
// right.classList.add('cube');
// btn.classList.add('btn');
// container.classList.add('container');

// // const userNum = prompt('Type your number', 0);


// function getRandom(){
// 	return Math.ceil(Math.random() * +userNum);
// }

// btn.addEventListener('click', function(){
// 	const randomLeft = getRandom();
// 	left.innerText = randomLeft;
// 	const randomRight = getRandom();
// 	right.innerText = randomRight;	
// });


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



})();