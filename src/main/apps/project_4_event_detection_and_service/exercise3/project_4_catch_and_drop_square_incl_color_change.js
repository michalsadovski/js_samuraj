
const square = document.querySelector('div');
//document.body.appendChild(square);
//let sizeOfSquare = 100;
let divX = 50;
let divY = 50;
square.style.left = divX + 'px';
square.style.top = `${divY}px`;

let drawActive = false;
let insertDivX;
let insertDivY;

square.addEventListener('mousedown', function(e) {
square.style.backgroundColor = 'green';
drawActive = !drawActive;
// drawActive = true
console.log('wcisniete');

insertDivX = e.offsetX;
insertDivY = e.offsetY;
console.log(insertDivX, insertDivY);
});

square.addEventListener('mousemove', function(e) {
if (drawActive) {
  divX = e.clientX - insertDivX;
  divY = e.clientY - insertDivY;
  square.style.left = `${divX}px`;
  square.style.top = `${divY}px`;
}
console.log('ruszamy myszka');
});

square.addEventListener('mouseup', function() {
square.style.backgroundColor = 'black';
drawActive = !drawActive;
// drawActive = false
console.log('puściłem');
});
