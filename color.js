var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i]; 
            squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function() {
    //generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick new color
    pickedColor = pickColor();
    //change ColorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i =0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i =0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; 
    //add click liteners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor == pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
}

function changeColors(color) {
    for (var i =0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors
    for (var i = 0; i < num; i++){
    arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
   var r = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + b + ", " + g + ")";
}