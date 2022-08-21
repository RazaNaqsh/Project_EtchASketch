
//variables
const containerSize = 600;

//selectors

//mainGridContainer
const gridContainer = document.getElementById("container");
gridContainer.style.height = containerSize+"px";
gridContainer.style.width = containerSize+"px";
 
//changeGrid button
const change = document.querySelector('.changeSize');
change.addEventListener('click',changeSize)

//reset button
const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGrid);

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
    gridItem.forEach(item => item.style.height=(100/size)+"%")
 };

 function setDefaultGrid(){
    gridMaker(16);
    gridSize(16);
 }

 setDefaultGrid();


 
 function addColor(e){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    // e.target.style.backgroundColor = "blue";
 }


function changeSize(){
    let newSize = prompt("Enter size of grid. 64*64 is limit!")
    if (newSize !== null){
        newSize = parseInt(newSize);
        if(newSize< 1||newSize>64|| Number.isNaN(newSize)){
            alert("Enter a number under 64");
            changeSize();
        }
        else{
            removeGrid();
            gridMaker(newSize);
            gridSize(newSize);
        }
    }
}

function removeGrid(){
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
      gridContainer.removeChild(element);
    });
}

function resetGrid(){
    const gridArray = document.querySelectorAll('.gridItem');
    gridArray.forEach((element) => {
      element.style.backgroundColor="white";
    });
}