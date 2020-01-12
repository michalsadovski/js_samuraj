// ROZWIĄZANIE 1

//const changeFontSizeButton = document.querySelector('button');
//const liItems = document.querySelectorAll('li');
//
//let size = 100;
//
//const changeFontSize = function() {
//  size = size + 20;
//  liItems.forEach(function(singleliItem) {
//    singleliItem.style.display = 'block';
//    singleliItem.style.fontSize = size + '%';
//  })
//}
//changeFontSizeButton.addEventListener('click', changeFontSize);


// ROZWIĄZANIE 2

const changeFontSizeButton = document.querySelector('button');
const liItems = [...document.getElementsByTagName('li')];

let size = 100;

const changeFontSize = function() {
  size = size + 20;
  liItems.forEach(function(singleliItem) {
    singleliItem.style.display = 'block';
    singleliItem.style.fontSize = size + '%';
  })
}
changeFontSizeButton.addEventListener('click', changeFontSize);


// ROZWIĄZANIE 3

//const changeFontSizeButton = document.querySelector('button');
//const liItems = document.querySelectorAll('li');
//
//let size = 100;
//
//const changeFontSize = function() {
//  size = size + 20;
//  for(let i = 0; i < liItems.length; i++) {
//    liItems[i].style.display = 'block';
//    liItems[i].style.fontSize = size + '%';
//  }
//}
//changeFontSizeButton.addEventListener('click', changeFontSize);


// ROZWIĄZANIE 4

//const changeFontSizeButton = document.querySelector('button');
//const liItems = document.querySelectorAll('li');
//let fontSize = 10;
//
//const changeFontSize = function() {
//  fontSize = fontSize + 2;
//  for(let i = 0; i < liItems.length; i++) {
//    if (liItems[i].style.display = '') {
////    if (!liItems[i].style.display) {  mozna i w ten sposob
//      console.log('dodalem block');
//      liItems[i].style.display = 'block';
//    }
//    liItems[i].style.fontSize = `${fontSize}px`;
//  }
//}
//changeFontSizeButton.addEventListener('click', changeFontSize);