var cursor = document.getElementById('cursor')
	document.addEventListener('mousemove',function(event){
		var x = event.clientX;
		var y = event.clientY;
		cursor.style.left = x + "px"
		cursor.style.top = y + "px"

	})