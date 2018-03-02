//colors number
var numSquares = 6;
var colors = [];
var pickedColor;

//document all square select
var squares = document.querySelectorAll(".square");
// document colors code display
var colorDisplay = document.getElementById("colorDisplay");
//document game select message
var messageDisplay = document.querySelector("#message");
//document h1 tag
var h1 = document.querySelector("h1");
//document reset button select
var resetButton = document.querySelector("#reset");
// game single color store
//document mode class selector
var modeButton = document.querySelectorAll(".mode");


init();
function init(){
	setmodeButton();
	setSquares();
	reset()
};
//setSquares
function setSquares(){
	for(var i = 0; i < squares.length; i++){
	// click squares
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				messageDisplay.style.color ="#00883d";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
				messageDisplay.style.color ="red";
			}
		});
	}
}
// setmodeButton
function setmodeButton(){
	for(var i = 0; i < modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			console.log(this.textContent);
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;	
			reset();
		})
	}	
}
// reset button function
function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#3b444c";
	resetButton.textContent = "new colors";	
}
// Reset Button click function
resetButton.addEventListener("click", function() {
	reset()
});
//game win squares all colors
function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}
// game single color continues change
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
// game all colors generator store
function generateRandomColors(num) {
	//make an array
	var arr = [];
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
// game single color generator
function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
