const input = document.querySelector('input');
const divWithMessage = document.querySelector('.message');
const passwords = ['jEden','dWa','Trzy'];
const messages = ['zgadles','dobrze','prawidlowo'];


// ==================================
// ROZWIĄZANIE - 1 WERSJA Z FOR EACH:
// ==================================

const showMessage = (e) => {
  let targetValue = e.target.value;
  passwords.forEach((item, i) => {
    if(item.toLowerCase() === targetValue.toLowerCase()) {
    divWithMessage.textContent = messages[i];
    targetValue = '';
    }
  })
}
input.addEventListener('input', showMessage);