const gridItem = document.getElementById("grid-item");

gridItem.addEventListener("mouseover", function(){
    console.log(this.children[0].children[0]);
    this.children[0].children[0].setAttribute("src", "./images/evilface.png");
})