
//pesudocode
// make divs, size them up in container, add color when hovered, change size, (extra feature) =set color to random

//first thing we need is to create a function to create divs but calling them now would make them appear in column, so we will call it with another function to size it aswell, so we can make a function which will call both of these function and let this be function be called DefaultGrid.
// another thing in the function which makes div, the scope will be inside this function only, so we needa add the hover class in here only, when these created divs are hovered.
// thus previous step will call addcolor function aswell, which will add color style property into that element.
// last thing would be a prompt to change size, here we needa make function taking input as prompt and set a condition that max size would be 100 only, if its not then return prompt again, and if the condition is fulfilled then delete the previous grid and make new grid, by calling make div func and size up func here.

//selectors

const gridContainer = document.getElementById("container");




function gridMaker(size){
    for(i=0;i<size*size;i++){
        const gridItem = document.createElement("div");
        gridContainer.appendChild(gridItem).className="gridItem";
    }
}
