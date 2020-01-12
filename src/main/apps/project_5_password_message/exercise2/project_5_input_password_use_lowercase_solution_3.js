const input = document.querySelector('input');
const divWithMessage = document.querySelector('.message');
const passwords = ['jEden','dWa','Trzy'];
const messages = ['zgadles','dobrze','prawidlowo'];


// ===========================
// ROZWIĄZANIE - WERSJA Z MAP:
// ===========================

const numbersOne = [10,45,46].map(number => { return number *3 });
const numbersTwo = [10,45,46].map(number => number *3); // ten sam efekt

const lowerCasePasswords = passwords.map(singlePassword => singlePassword.toLowerCase())

const showMessage = (e) => {
  const targetValue = e.target.value;

  for (let i =0; i < lowerCasePasswords.length; i++) {
    if (targetValue.toLowerCase() === lowerCasePasswords[i]) {
      divWithMessage.innerHTML = messages[i];
    }
  }
}

input.addEventListener('input', showMessage);
