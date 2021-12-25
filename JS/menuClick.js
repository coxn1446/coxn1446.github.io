
function menuClick () {
    const itemAContainer = document.getElementById("itemAContainer");
    const itemABContainer = document.getElementById("itemABContainer");

    if (itemABContainer.style.display==="grid"){;
        itemAContainer.style.gridRow="span 2";
        itemAContainer.style.gridTemplateRows = "repeat(2,1fr)";
        itemABContainer.style.display="none";
    } else {
        itemAContainer.style.gridRow="span 4";
        itemAContainer.style.gridTemplateRows = "repeat(8,1fr)";
        itemABContainer.style.display="grid";
    }
  }

 //export {menuClick};
  
  //Turns menu button into a clickable event
  const menuButton = document.getElementById("menuButton");
  menuButton.addEventListener("click",menuClick);