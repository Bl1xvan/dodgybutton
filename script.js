const gridItem = document.getElementById("grid-item");
const sizeRecord = document.getElementById("size-record");
const windowBox = document.body;
const clickMe = document.getElementById("click-me");
const face = document.getElementById("face");

const OFFSET = 90;

document.addEventListener("mousemove", (e) => {
    const x = e.pageX;
    const y = e.pageY;
    const gridSize = gridItem.getBoundingClientRect();

    const horizontalDistanceFrom = distanceFromCenter(gridSize.x, x, gridSize.width);
    const verticalDistanceFrom = distanceFromCenter(gridSize.y, y, gridSize.height);

    const horizontalOffset = gridSize.width / 2 + OFFSET;
    const verticalOffset = gridSize.height / 2 + OFFSET;

    if(Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset){
        setButtonPosition(gridSize.x + horizontalOffset / horizontalDistanceFrom * 10, 
            gridSize.y + verticalOffset / verticalDistanceFrom * 10);
        face.setAttribute("src", "./images/evilface.png");
    }
})

function setButtonPosition(left, top){
    const windowSize = windowBox.getBoundingClientRect();
    const gridSize = gridItem.getBoundingClientRect();

    if(distanceFromCenter(left, windowSize.left, gridSize.width) < 0){
        left = windowSize.right - gridSize.width - OFFSET;
    }
    if(distanceFromCenter(left, windowSize.right, gridSize.width) > 0){
        left = windowSize.left + OFFSET;
    }
    if(distanceFromCenter(top, windowSize.top, gridSize.height) < 0){
        top = windowSize.bottom - gridSize.height - OFFSET;
    }
    if(distanceFromCenter(top, windowSize.bottom, gridSize.height) > 0){
        top = windowSize.top + OFFSET;
    }

    gridItem.style.left = `${left}px`;
    gridItem.style.top = `${top}px`;
}

function distanceFromCenter(gridPosition, mousePosition, gridSize){
    return gridPosition - mousePosition + gridSize / 2;
}