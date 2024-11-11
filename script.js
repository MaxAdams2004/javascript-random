let button = document.getElementById("button1");
let input = document.getElementById("input1");
let output = document.getElementById("output1");

let response = ["This password needs work.", "This password has already been entered.", "This password is mid.", "lol"];
let fonts = ["Times New Roman", "Georgia", "Garamond", "Arial", "Verdana", "Helvetica", "Courier New", "Lucida Console", "Monaco", "Copperplate","Papyrus"];
let borders = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none"];
let padding1 = ["5px", "10px", "15px", "20px", "25px"];

button.addEventListener("click", function(){
	var currentInput = input.value;
	generate(currentInput);
	restyle();
});


function generate(incUserInput){
	var random1 = Math.floor(Math.random() * response.length);
	var finalRandom = response[random1];
	output.innerText = "Expert analysis of '" + incUserInput + "': " + finalRandom;
}

function restyle(){
	var random2 = Math.floor(Math.random() * response.length);
	var randomFont = fonts[random2];
	var random3 = Math.floor(Math.random() * borders.length);
	var randomBorder = borders[random3];
	var random4 = Math.floor(Math.random() * padding1.length)
	var randomPadding = padding1[random4]
	output.style.fontFamily = randomFont;
	output.style.borderStyle = randomBorder;
	output.style.padding = randomPadding;
}