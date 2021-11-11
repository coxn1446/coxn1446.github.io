/* This is a very simple function that simply changes the color of an element on a web page.
The focus of this project is the HTML and CSS, not the Javascript */


//Assigns the Change Color Button element to a variable
let changeColorButton = document.getElementById('changeColorButton');

//Assigns the section of HTML that I want to change colors to a variable
let elementF = document.getElementById('backgroundItemF');

//An array of colors to be used on the background of elementF
let colors = ["goldenrod","salmon","cornflowerblue","ivory","khaki","navajowhite","navy","olive"];

//Takes a random index of the colors array and assigns it to be the background color of elementF
function changeColor () {
    let randomNumber = (Math.floor(Math.random()*9));
    elementF.style.backgroundColor = colors[randomNumber];
};

//Runs changeColor() when the changeColorButton is clicked
changeColorButton.addEventListener('click',changeColor);

/* Again, another simple Javascript function.
The focus should remain elsewhere*/

let itemJA = document.getElementById('itemJA')

let itemJB = document.getElementById('itemJB')

let submitButton = document.getElementById('submitButton')

function changeDisplay () {
    itemJA.style.display = "none"
    itemJB.style.display = "block"
}