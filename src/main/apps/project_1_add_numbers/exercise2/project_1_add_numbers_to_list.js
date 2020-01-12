let number = 1;
let activeNumber = 1;

const addSingleLiElement = () => {
  const createSingleLiElement = document.createElement('li');
  createSingleLiElement.textContent = number;
  document.querySelector('ul').appendChild(createSingleLiElement);
  if (number %3 == 0) {
    createSingleLiElement.classList.add('big')
  }
  number = number + 2;
  console.log(number);
}

const addElementOnButtonClick = document.querySelector('button');
addElementOnButtonClick.addEventListener('click', addSingleLiElement);
