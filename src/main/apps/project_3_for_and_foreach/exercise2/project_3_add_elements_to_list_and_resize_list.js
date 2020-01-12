let size = 10;
let orderElement = 1;

const init = () => {
  const addNewElementButton = document.createElement('button');
  addNewElementButton.textContent = "Dodaj elementy do listy";
  addNewElementButton.style.fontSize = '28px';
  document.body.appendChild(addNewElementButton);

  const resetButton = document.createElement('button');
  resetButton.textContent = "Reset";
  resetButton.style.fontSize = '28px';
  document.body.appendChild(resetButton);

  const ulList = document.createElement('ul');
  ulList.style.listStyle = 'none';
  document.body.appendChild(ulList);

  addNewElementButton.addEventListener('click', createLiElements);
  resetButton.addEventListener('click', cleanList);

}

const createLiElements = function() {
  console.log('klik');
  for(let i = 0; i < 10; i++) {
    const liList = document.createElement('li');
    liList.textContent = `Element nr ${orderElement++}`;
    liList.style.fontSize = `${size++}px`;
    document.querySelector('ul').appendChild(liList);
}
}

const cleanList = function() {
    document.querySelector('ul').textContent = '';
    size = 10;
    orderElement = 1;
}

init();