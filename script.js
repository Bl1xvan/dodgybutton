const gridItem = document.getElementById("grid-item");
const sizeRecord = document.getElementById("size-record");
const windowBox = document.body;
const clickMe = document.getElementById("click-me");

windowBox.addEventListener("resize", function(){
    let windowSize = windowBox.getBoundingClientRect();
    let gridSize = gridItem.getBoundingClientRect();

    console.log(windowSize.x);
    console.log(gridSize.x);

})