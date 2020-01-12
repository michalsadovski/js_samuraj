const buttonToRandomize = document.querySelector('button'); // bo <div class="message"></div> dla klasy dajemy kropke
const div = document.querySelector('div');
const carNames = ['Ferrari','Audi','Skoda','Lamborghini','Fiat','Renault','Kia'];
const prefix = ['Najlepsze auto to','Bralbym wylacznie','Moj typ to','Zdcydowanie dobrze brzmi',
'Tu rzadzi','Jak nic nr 1 to','Wybor jest prosty:'];

const nameGenerator = () => {
//  console.log('dziala');
  const indexNames = Math.floor(Math.random()*carNames.length);
  const indexPrefix = Math.floor(Math.random()*prefix.length);
  div.style.fontSize = '45px';
  div.textContent = `${prefix[indexNames]} ${carNames[indexPrefix]}`;

}
buttonToRandomize.addEventListener('click', nameGenerator);