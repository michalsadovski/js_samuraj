
let size = 100;

document.body.style.height = '10000px';
const curtain = document.createElement('div');
document.body.appendChild(curtain);

curtain.style.position = 'fixed';
curtain.style.left = 0;
curtain.style.top = 0;
curtain.style.width = '100%';
curtain.style.backgroundColor = 'green';
curtain.style.height = size + 'px';

let grow = true;

const changeHeight = function() {
  if (size >= 0.5 * window.innerHeight) {
    grow = !grow;
    curtain.style.backgroundColor = 'red';
  } else if (size <= 0) {
    grow = !grow;
    curtain.style.backgroundColor = 'green';
  };

  if (grow) {
    size += 10;
  } else {
    size -= 10;
  };
   curtain.style.height = size + 'px';
};

window.addEventListener('scroll', changeHeight);