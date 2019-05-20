;(function(){
	'use strict';

	const MOBILE_BTN_NODE = document.getElementById('mobBtn');
	const MENU_NODE = document.querySelector('.menu__list');

	const toggleMenu = () => {
		MENU_NODE.classList.toggle('active');
		MOBILE_BTN_NODE.classList.toggle('open');
	}

	MOBILE_BTN_NODE.addEventListener('click', function(){
		toggleMenu();
	});


	document.addEventListener('click', function(event){
		event.preventDefault();
		if(event.target.classList.contains('menu__list-link')) {
			if(!MENU_NODE.classList.contains('active')) return;
			toggleMenu();
		}
	});


})();