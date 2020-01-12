let number = 1;
let activeNumber = 1;

const addNextNumber = () => {
  const singleNumber = document.createElement('div');
  singleNumber.textContent = number;
  // wersja 1
  if (activeNumber == 5) {
    activeNumber = 0;
    singleNumber.classList.add('circle')
  }
  // wersja 2
//  if (number % 5 == 0) {
//  singleNumber.classList.add('circle')
//  }
  document.body.appendChild(singleNumber);
  number++;
  activeNumber++;
  console.log(number-1);
};

const buttonCreatingNumbers = document.querySelector('.buttonLaunchingNumbers');
buttonCreatingNumbers.addEventListener('click', addNextNumber);
