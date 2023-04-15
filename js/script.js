let container = document.querySelector('.container');

for(let i = 0; i < 16; i++){
  let row = document.createElement('div');
  row.classList.add('grid-row');
  container.appendChild(row);
  for(let j = 0; j<16; j++){
    let square = document.createElement('div');
    square.classList.add('grid');
    row.appendChild(square);
  }
}