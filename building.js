const addStamp = function (x, y) { 
  // <img src="circle.svg">
  const word = document.createElement("P") //create an image from scratch
  word.innerText = "relations";
  word.style.left = x + "px" // to put it according to the X position that we clicked
  word.style.top = y + "px" // to put it according to the Y position that we clicked
 
  document.body.appendChild(word)
}
  
document.addEventListener("click", function (event) {
  addStamp(event.pageX, event.pageY) //print out pixels across the page + pixels down the page, on click
})