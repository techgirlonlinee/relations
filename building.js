function getRandomPosition(element) {
    var x = document.body.offsetHeight;
    var y = document.body.offsetWidth;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

window.onload = function() {
    const object = document.createElement("div")
    object.setAttribute("id", "eachWord");
    object.innerText = "self";
    object.style.color = "#399558";
    document.body.appendChild(object);
    var xy = getRandomPosition(object);
    object.style.top = xy[0] + 'px';
    object.style.left = xy[1] + 'px';
}

const twoWordArray = ["self", "other"]
let wordToSelect = 0

const addStamp = function(x, y) {

    if (wordToSelect === 0) {
        wordToSelect = 1
    } else {
        wordToSelect = 0
    }

    const word = document.createElement("div") //create an image from scratch
    // word.innerText = "other";
    word.innerText = twoWordArray[wordToSelect];
    word.style.left = x + "px" // to put it according to the X position that we clicked
    word.style.top = y + "px" // to put it according to the Y position that we clicked

    document.body.appendChild(word)
}

document.addEventListener("click", function(event) {
    addStamp(event.pageX, event.pageY) //print out pixels across the page + pixels down the page, on click
})

const button = document.querySelector('.manifesto')
const content = document.querySelector('div.manifesto-content')
button.addEventListener("click", function(event) {
	console.log("click")
    event.preventDefault()
    content.classList.toggle('open');
})

// 

    // if (content.classList.contains("open")) {
    //     content.classList.add("open")
    // } else {
    //     content.classList.remove("open")
    // }
// button.addEventListener("click", function(element, index) {
//     if (button.classList.contains('.open')) {
//         button.classList.add(".open")
//     } else {
//         button.classList.remove(".open")
//     }
// })