let tableWithAdvices = [];

const input = document.querySelector('input');
//const divInputAdvice = document.querySelector('div');
const div = document.querySelector('div');

const minValueInTable = tableWithAdvices[0];
const maxValueInTable = tableWithAdvices[tableWithAdvices.length-1];

const showRandomNumber = (e) => {
  e.preventDefault();
  const minValue = tableWithAdvices[0];
  const maxValue = tableWithAdvices[tableWithAdvices.length-1];
  const number = Math.floor(Math.random() * (maxValue - minValue) + minValue);
  document.querySelector('h3').textContent = number;
  console.log(number);
}

const addNumber = (e) => {
  e.preventDefault();
  let newAdvice = parseInt(input.value, 10);
  if (input.value.length) {
    for (advice of tableWithAdvices) {
      if (advice === newAdvice) {
        alert('Ale to już było!');
        return;
      }
   }
    tableWithAdvices.push(newAdvice);
    console.log(tableWithAdvices);
    div.textContent += newAdvice + ', ';
    input.value = '';
  }
}

const reset = (e) => {
  e.preventDefault();
  tableWithAdvices.length = null;
  alert('Reset zrobiony pomyślnie.');
  console.log(tableWithAdvices);
}



document.querySelector('.addNumber').addEventListener('click', addNumber);
document.querySelector('.showRandomNumber').addEventListener('click', showRandomNumber);
document.querySelector('.reset').addEventListener('click', reset);

