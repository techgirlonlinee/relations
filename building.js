function getRandomPosition(element) {
    var x = document.body.offsetHeight - 10;
    var y = document.body.offsetWidth - 10;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
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

const twoWordArray = ["self", "other"]
let wordToSelect = 0

const addStamp = function(x, y) {
    if (wordToSelect === 0) {
        wordToSelect = 1
    } else {
        wordToSelect = 0
    }

    const word = document.createElement("div")
    // word.innerText = "other";
    word.innerText = twoWordArray[wordToSelect];
    word.style.left = x + "px"
    word.style.top = y + "px"

    document.body.appendChild(word)
    word.setAttribute("id", "eachWord");
}


document.addEventListener("click", function(event) {
    addStamp(event.pageX, event.pageY)
})


const closeButton = document.querySelector('.manifesto')
const content = document.querySelector('div.manifesto-content')
const viewButton = document.querySelector('a.expand-button')
closeButton.addEventListener("click", function(event) {
    // console.log("click")
    event.preventDefault()
    content.classList.toggle('open');
    viewButton.classList.toggle('seen');
})

viewButton.addEventListener("click", function(event) {
    event.preventDefault();
    content.classList.toggle('open');
    viewButton.classList.toggle('seen');
})

const closeTab = document.querySelector('.close-tab')
closeTab.addEventListener("click", function(event) {
	event.preventDefault();
	console.log("click when menu off")
	content.classList.toggle('open');
	viewButton.classList.toggle('seen');
})

// if (content.classList.contains('open')) {
//     document.addEventListener("click", function(event) {
//         console.log("click when menu off")
//         addStamp(event.pageX, event.pageY)
//     })
// }















