const gridItem = document.getElementById("grid-item");
const buttonPosition = document.getElementById("button-position");



console.log(document.body.getBoundingClientRect());

gridItem.addEventListener("mouseover", function(){
    const angel = this.children[0].children[0];
    angel.setAttribute("src", "./images/evilface.png");
    this.style.top = Math.abs(movementY(20, 400))+`px`;
    this.style.left = Math.abs(movmentX(100, 1400))+`px`;
    this.style.bottom = Math.abs(movementY(20, 400))+`px`;
    this.style.right = Math.abs(movmentX(100, 1400))+`px` ;

    const gridPosValue = gridItem.getBoundingClientRect();
    buttonPosition.innerHTML = "X = " +gridPosValue.x + " Y = " + gridPosValue.y;
})

function movmentX(min, max){
    return Math.floor(Math.random() * (min - max + 1)) + min;
}

function movementY(min, max){
    return Math.floor(Math.random() * (min - max + 1)) + min;
}