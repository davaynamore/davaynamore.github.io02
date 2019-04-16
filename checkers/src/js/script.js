; (function () {
	'use strict';

	const container = document.querySelector('.container');
	const board = document.querySelector('.board');
	const button = document.querySelector('.btn');

	button.addEventListener('click', () => {
		board.classList.toggle('absolute');
		board.classList.toggle('float');
	});

})();