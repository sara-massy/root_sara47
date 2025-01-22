console.log("🖥️");

const circles = document.querySelectorAll(".circle");
circles.forEach(function(item, index) {
    item.addEventListener("click", function(){
        console.log("cricle clicked:" + (parseInt(index)+1));
    })
})
//i = i will be changed to i++
// for(let i = 0; i < circles.length; i++) {
// console.log(i);
// circles[i].style.backgroundColor = "yellow"