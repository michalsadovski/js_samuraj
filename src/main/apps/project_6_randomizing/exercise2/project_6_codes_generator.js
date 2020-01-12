const chars = 'ABCDEFGHIJKLOMNOPRSTUVWYZ0123456789';
const buttonToRandomize = document.querySelector('button'); // bo <div class="message"></div> dla klasy dajemy kropke
const section = document.querySelector('section');

const codesNumber = 100;
const charsNumber = 10;

const codesGenerator = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = '';
    for (let i = 0; i < charsNumber; i++) {
      const index = Math.floor(Math.random()*chars.length)
      code += chars[index];
    }
    const div = document.createElement('div');
    div.textContent = i+1 + '. ' + code;
    console.log(div.textContent);
    section.appendChild(div);
  }
}

buttonToRandomize.addEventListener('click', codesGenerator);
