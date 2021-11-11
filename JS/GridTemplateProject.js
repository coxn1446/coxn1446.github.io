/* This is a very simple function that simply changes the color of an element on a web page. The focus of this project is the HTML and CSS, not the Javascript */

let changeColorButton = document.getElementById('changeColorButton');

let elementF = document.getElementById('backgroundItemF');

let colors = ["goldenrod","salmon","cornflowerblue","ivory","khaki","navajowhite","navy","olive"];

function changeColor () {
    let randomNumber = (Math.floor(Math.random()*6));
    elementF.style.backgroundColor = colors[randomNumber];
};

changeColorButton.addEventListener('click',changeColor);