

const square = document.createElement('div');
document.body.appendChild(square);
let sizeOfSquare = 100;
square.style.width = sizeOfSquare + 'px';
square.style.height = sizeOfSquare + 'px';

let grow = true;

//document.body.style.background = 'pink';

window.addEventListener('scroll', function() {
  if (sizeOfSquare >= 0.5 * window.innerHeight) {
    grow = !grow;
  }
  else if (sizeOfSquare <= 0) {
    grow = !grow;
  }

  if (grow) {
    sizeOfSquare += 10;
  } else {
    sizeOfSquare -= 10;
  }
    square.style.width = sizeOfSquare + 'px';
    square.style.height = sizeOfSquare + 'px';
});
