let tableWithAdvices = ['adaf','adfa'];

const input = document.querySelector('input');
//const divInputAdvice = document.querySelector('div');
const div = document.querySelector('div');
let counter = 0;

const showSingleAdvice = (e) => {
  e.preventDefault();
  const singleAdvice = Math.floor(Math.random()*tableWithAdvices.length);
  document.querySelector('h1').textContent = tableWithAdvices[singleAdvice];
  console.log(tableWithAdvices[singleAdvice]);
}

const addGoodAdvice = (e) => {
  e.preventDefault();
  counter += 1;
  let newAdvice = input.value;
  if (input.value.length) {
    for (advice of tableWithAdvices) {
      if (advice === newAdvice) {
        alert('Ale to już było!');
        return;
      }
   }
    tableWithAdvices.push(newAdvice);
    console.log(tableWithAdvices);
    div.textContent += counter + '. ' + newAdvice + ' ';
    input.value = '';
  }
}

const reset = (e) => {
  e.preventDefault();
  tableWithAdvices.length = null;
  alert('Reset zrobiony pomyślnie.');
  console.log(tableWithAdvices);
}


const showAllAdvices = (e) => {
  e.preventDefault();
  alert(tableWithAdvices.join(', '));
  console.log(tableWithAdvices);
  //for (let i = 0; i < tableWithAdvices.length; i++) {
  //  console.log = tableWithAdvices[i];
  //  }
}

document.querySelector('.addGoodAdvice').addEventListener('click', addGoodAdvice);
document.querySelector('.resetAllAdvices').addEventListener('click', reset);
document.querySelector('.showSingleAdvice').addEventListener('click', showSingleAdvice);
document.querySelector('.showAllAdvices').addEventListener('click', showAllAdvices);
