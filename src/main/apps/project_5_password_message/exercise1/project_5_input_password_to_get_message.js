const input = document.getElementById('pass');
const div = document.querySelector('.message'); // bo <div class="message"></div> dla klasy dajemy kropke
const passwords = ['user','wiosna','Kasia'];
const messages = ['tajemnicza wiadomosc','kolejna tajemnicza wiadomosc','prawie jak Basia'];

input.addEventListener('input', (e) => {
  div.textContent = '';
  let targetValue = e.target.value;
  passwords.forEach((singlePassword, index) => {
    if(singlePassword === targetValue) {
      console.log(singlePassword, index);
      div.textContent = messages[index];
      targetValue = '';
    }
  })
})

input.addEventListener('focus', (e) => {
  e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
  e.target.classList.remove('active');
})


//input.addEventListener('input', (e) => {
//  if (password === e.target.value) {
//    div.textContent = message;
//    e.target.value = '';
//  } else {
//    div.textContent = '';
//  }
//})
