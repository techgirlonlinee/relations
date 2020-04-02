function getRandomPosition(element) {
	var x = document.body.offsetHeight;
	var y = document.body.offsetWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

window.onload = function() {
	const object = document.createElement("div")
    object.innerText = "self";
    object.style.color = "#399558";
	document.body.appendChild(object);
	var xy = getRandomPosition(object);
	object.style.top = xy[0] + 'px';
	object.style.left = xy[1] + 'px';
}


const addStamp = function(x, y) {
    // <img src="circle.svg">
    const word = document.createElement("div") //create an image from scratch
    word.innerText = "other";
    word.style.left = x + "px" // to put it according to the X position that we clicked
    word.style.top = y + "px" // to put it according to the Y position that we clicked
    
    document.body.appendChild(word)
}

document.addEventListener("click", function(event) {
    addStamp(event.pageX, event.pageY) //print out pixels across the page + pixels down the page, on click
})


