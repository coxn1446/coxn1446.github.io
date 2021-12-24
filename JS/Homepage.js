const containerGrid = document.getElementById('containerGrid');
const itemAContainer = document.getElementById("itemAContainer");
const itemABContainer = document.getElementById("itemABContainer");
const itemABA = document.getElementById("itemABA");
const itemABB = document.getElementById("itemABB");
const itemABC = document.getElementById("itemABC");
const itemABD = document.getElementById("itemABD");
const itemBContainer = document.getElementById("itemBContainer");
const menuButton = document.getElementById('menuButton');

function menuClick () {
    if (itemABContainer.style.display==="grid"){
        containerGrid.style.gridTemplateRows="repeat(8,75px)";
        itemAContainer.style.gridRow="1 / span 2";
        itemAContainer.style.gridTemplateRows = "repeat(2,1fr)";
        itemABContainer.style.display="none";
        itemBContainer.style.gridRow="3 / span 6";
    } else {
        containerGrid.style.gridTemplateRows="repeat(10,75px)";
        itemAContainer.style.gridRow="1 / span 4";
        itemAContainer.style.gridTemplateRows = "repeat(8,1fr)";
        itemABContainer.style.display="grid";
        itemBContainer.style.gridRow="5 / span 6";
    }
  }
  
  //Turns menu button into a clickable event
  menuButton.addEventListener('click',menuClick);