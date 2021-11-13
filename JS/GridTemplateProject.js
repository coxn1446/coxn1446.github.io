/* These are simple javascript functions to make the page less boring.
The focus of this project is the HTML and CSS, not the Javascript */


//Assigns the Change Color Button element to a variable
let changeColorButton = document.getElementById('changeColorButton');

//Assigns the section of HTML that I want to change colors to a variable
let itemFContainer = document.getElementById('itemFContainer');

//An array of colors to be used on the background of elementF
let colors = ["goldenrod","salmon","cornflowerblue","ivory","khaki","navajowhite","navy","olive"];

//Takes a random index of the colors array and assigns it to be the background color of elementF
function changeColor () {
    let randomNumber = (Math.floor(Math.random()*9));
    itemFContainer.style.backgroundColor = colors[randomNumber];
};

//Runs changeColor() when the changeColorButton is clicked
changeColorButton.addEventListener('click',changeColor);

//Pulls the HTML element where I store my form into a variable
let itemJA = document.getElementById('itemJA')

//Pulls the HTML element that I want to reveal into a form
let itemJB = document.getElementById('itemJB')

//Pulls the form submit button into a variable
let submitButton = document.getElementById('submitButton')

/*A function which is added to the "onsubmit" attribute of our HTML form
When you click submit, nothing happens besides hiding the form and revealing
the secret message*/
function changeDisplay () {
    itemJA.style.display = "none"
    itemJB.style.display = "block"
}

//Pulls the menu button into a variable so I can click it
let menuButton = document.getElementById('menuButton')

//All the elements of my HTML I need to change when menu is click or unclicked
let containerGrid = document.getElementById('containerGrid')
let itemAContainer = document.getElementById("itemAContainer")
let itemABContainer = document.getElementById("itemABContainer")
let itemABA = document.getElementById("itemABA")
let itemABB = document.getElementById("itemABB")
let itemABC = document.getElementById("itemABC")
let itemABD = document.getElementById("itemABD")
let itemBContainer = document.getElementById("itemBContainer")
let itemCContainer = document.getElementById("itemCContainer")
let itemDContainer = document.getElementById("itemDContainer")
let itemEContainer = document.getElementById("itemEContainer")

//itemFContainer has been previously declared as a variable on line 9

let itemGContainer = document.getElementById("itemGContainer")
let itemHContainer = document.getElementById("itemHContainer")
let itemIContainer = document.getElementById("itemIContainer")
let itemJContainer = document.getElementById("itemJContainer")


function menuClick () {
    if (itemABContainer.style.display==="none"){
        containerGrid.style.gridTemplateRows="repeat(34,75px)";
        itemAContainer.style.gridRow="1 / span 4";
        itemAContainer.style.gridTemplateRows = "repeat(8,1fr)";
        itemABContainer.style.display="grid";
        itemABA.style.display="flex";
        itemABB.style.display="flex";
        itemABC.style.display="flex";
        itemABD.style.display="flex";
        itemABA.style.gridRow="1 / span 1";
        itemABB.style.gridRow="2 / span 1";
        itemABC.style.gridRow="3 / span 1";
        itemABD.style.gridRow="4 / span 1";
        itemBContainer.style.gridRow="5 / span 3";
        itemCContainer.style.gridRow="8 / span 3";
        itemDContainer.style.gridRow="11 / span 3";
        itemEContainer.style.gridRow= "14 / span 3";
        itemFContainer.style.gridRow="17 / span 5";
        itemGContainer.style.gridRow="22 / span 3";
        itemHContainer.style.gridRow="25 / span 3";
        itemIContainer.style.gridRow="28 / span 3";
        itemJContainer.style.gridRow= "31 / span 4";
    } else {
        containerGrid.style.gridTemplateRows="repeat(32,75px)";
        itemAContainer.style.gridRow="1 / span 2";
        itemAContainer.style.gridTemplateRows = "repeat(2,1fr)";
        itemABContainer.style.display="none";
        itemABA.style.display="none";
        itemABB.style.display="none";
        itemABC.style.display="none";
        itemABD.style.display="none";
        itemABA.style.gridRow="1 / span 1";
        itemABB.style.gridRow="1 / span 1";
        itemABC.style.gridRow="1 / span 1";
        itemABD.style.gridRow="1 / span 1";
        itemBContainer.style.gridRow="3 / span 3";
        itemCContainer.style.gridRow="6 / span 3";
        itemDContainer.style.gridRow="9 / span 3";
        itemEContainer.style.gridRow= "12 / span 3";
        itemFContainer.style.gridRow="15 / span 5";
        itemGContainer.style.gridRow="20 / span 3";
        itemHContainer.style.gridRow="23 / span 3";
        itemIContainer.style.gridRow="26 / span 3";
        itemJContainer.style.gridRow= "29 / span 4";
    }
}

menuButton.addEventListener('click',menuClick);