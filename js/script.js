let container = document.querySelector('.container');
let button = document.querySelector('button');


button.addEventListener('click', editGrid);

function init(){
  createGrid(16);
}

function createGrid(size){
  //first create the divs that compose the grid
  for(let i = 0; i < size; i++){
    let row = document.createElement('div');
    row.classList.add('grid-row');
    container.appendChild(row);
    for(let j = 0; j<size; j++){
      let square = document.createElement('div');
      square.classList.add('grid');
      row.appendChild(square);
    }
  }

  //then add an event listener to them so they change on hover
  let squareList = document.querySelectorAll('.grid');
  squareList.forEach(((item) => {
    item.addEventListener('mouseover', (e) => {
      e.target.classList.add('grid-hover');
    });
  }))
}

function editGrid(){
  let size = +prompt('How many grids in each row/column woudld \
  you like. Only enter a single number');
  if (isNaN(size)){
    console.log('not a number');
    return;
  }
  deleteGrid();
  createGrid(size);

}

function deleteGrid(){
  while(container.firstChild){
    container.firstChild.remove();
  }
}

init();