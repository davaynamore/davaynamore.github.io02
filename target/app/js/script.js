let form = document.getElementById("form");

form.addEventListener('submit', function(e){
	e.preventDefault();
	const arr = Array.prototype.map.call(form.elements, function(el){
		if(el.value==='') alert('Заполни поле!');
		return;
	});

	console.log(arr);
});

