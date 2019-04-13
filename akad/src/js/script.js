'use strict';

;(function(){
	const topline = document.querySelector('.top-line');

	function toTopBtnFn(){
		const toTopBtn = document.createElement('span');

		const addBtn = () => {
			toTopBtn.classList.add('to-top');
			document.body.appendChild(toTopBtn);
			const toTopPosition = window.innerHeight;	

			toTopBtn.addEventListener('click', () => {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			})	
		}

		const removeBtn = () => {
			toTopBtn.remove();
		}

		return {
			addBtn: addBtn,
			removeBtn: removeBtn
		}
	}

	const btnToTop = toTopBtnFn();

	document.addEventListener('scroll', () => {
		if(window.pageYOffset < topline.clientHeight) {
			topline.classList.remove('fixed');	
		} else {
			topline.classList.add('fixed');	
		}

	// if(window.pageYOffset >= window.innerHeight) {
	// 	btnToTop.addBtn();
	// } else {
	// 	btnToTop.removeBtn();
	// }

	window.pageYOffset >= window.innerHeight ? btnToTop.addBtn() : btnToTop.removeBtn();
	

});	
})();
