
//pesudocode
// make divs, size them up in container, add color when hovered, change size, (extra feature) =set color to random
0
//first thing we need is to create a function to create divs but calling them now would make them appear in column, so we will call it with another function to size it aswell, so we can make a function which will call both of these function and let this be function be called DefaultGrid.
// another thing in the function which makes div, the scope will be inside this function only, so we needa add the hover class in here only, when these created divs are hovered.
// thus previous step will call addcolor function aswell, which will add color style property into that element.
// last thing would be a prompt to change size, here we needa make function taking input as prompt and set a condition that max size would be 100 only, if its not then return prompt again, and if the condition is fulfilled then delete the previous grid and make new grid, by calling make div func and size up func here.

//variables
const containerSize = 600;

//selectors

//mainGridContainer
const gridContainer = document.getElementById("container");
console.log(gridContainer);
gridContainer.style.height = containerSize+"px";
gridContainer.style.width = containerSize+"px";


function gridMaker(size){
    for(i=0;i<size*size;i++){
         const gridItem = document.createElement("div");
         gridContainer.appendChild(gridItem).className="gridItem";
         gridItem.addEventListener('mouseover', addColor);
    }
}

function gridSize(size){
    const gridItem = Array.from(document.querySelectorAll('.gridItem'))
    gridItem.forEach(item =>item.style.width=(100/size)+"%"
    );
    gridItem.forEach(item => item.style.height=(100/size)+"%");
 };

 function setDefaultGrid(){
    gridMaker(16);
    gridSize(16);
 }

 setDefaultGrid();
 
 function addColor(e){
    // const randomR = Math.floor(Math.random() * 256);
    // const randomG = Math.floor(Math.random() * 256);
    // const randomB = Math.floor(Math.random() * 256);
    // e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    e.target.style.backgroundColor = "blue";
 }

 