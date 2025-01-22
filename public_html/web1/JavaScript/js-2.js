console.log("JS 2 is loaded");

//Step 1 - selecting your element
const myStar = document.getElementById("star-five");

//Step 2 - adding a click event

//myStar.addEventListener("click", function( {
//
// }));

myStar.addEventListener(click, () => {
    myStar.style.borderleft = "100px solid black";
    // myTriangle.style.borderLeft= "100px solid pink";
    myStar.classList.toggle("change-me");
})


