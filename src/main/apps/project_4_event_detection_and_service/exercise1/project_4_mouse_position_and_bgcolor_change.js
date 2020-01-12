const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', function (e) {
  const x = e.clientX + 1; //wtedy uzyskamy maximum wynoszace 255
  const y = e.clientY + 1;

  const red = x / window.innerWidth * 100;
  const green = y / window.innerHeight * 100;
  const blue = ((x / window.innerWidth * 100) + (y / window.innerHeight * 100))/2;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%`;
})
