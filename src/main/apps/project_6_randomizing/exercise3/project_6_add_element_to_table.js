const names = [];
const div = document.querySelector('div');

const addName = (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  const newName = input.value;
  if (input.value.length) { //jesli brak slowa to = 0 czyli 'false'
    for (name of names) { //petla sprawdzajaca wszystkie elementy w tablicy, po kolei
      if(name === newName) {
        alert('Element potworzyl sie.aha ');
        return;
      }
    }
    names.push(newName);
    div.textContent += newName + ', ';
    input.value = '';
  }
}

document.querySelector('button').addEventListener('click', addName);
