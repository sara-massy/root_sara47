console.log("loaded!")

const stage = document.querySelector("body")
const myCosmix = document.getElementById("cosmix");

const sheMoves = new Audio("sounds/shine-1-268902.mp3"); 
const sheCatches = new Audio("sounds/shine-9-268911.mp3"); 

myCosmix.onclick = () => {
    myCosmix.classList.toggle("move")
    sheMoves.play();
}

//E56
//myCosmix.onclick = () => {
// myCosmix.classlist.toggle("move");
// }

stage.addEventListener("click", function(event) {
    console.log(event.clientX +" : " +event.clientY);

   // var coords = "translateX("+event.clientX+"px) translateY("+event.clientY+"px)"; 
    var coords = `translateX(${event.clientX-150}px) translateY(${event.clientY-177}px)`;
    myCosmix.style.transform = coords;
})

// Keyboard input
document.onkeydown = checkKeys;

function checkKeys(event) {
    
    var style = window.getComputedStyle(myCosmix);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;    
    var coords;

    //left arrow
    if(event.keyCode == "37") {
        coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
        myCosmix.style.transform = coords;
    }
 //right arrow
 if(event.keyCode == "39") {
    coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
    myCosmix.style.transform = coords;
}
//up arrow
if(event.keyCode == "38") {
    coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
    myCosmix.style.transform = coords;
}
//down arrow
if(event.keyCode == "40") {
    coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
    myCosmix.style.transform = coords;
}
}

function addMyObject() {
/*custom object*/

let myObject = document.createElement ("img");
myObject.src = "img/star.svg";
myObject.style.width = "150px"
stage.append(myObject);
let w = window.innerWidth;
let h = window.innerHeight;

let randomX = Math.floor((Math.random() * w) + 1);
let randomY = Math.floor((Math.random() * h) + 1);

myObject.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;

setTimeout(() => { myObject.remove(); addMyObjectmyObject()}, 5000);
}

addMyObject();