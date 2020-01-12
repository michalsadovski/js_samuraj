//const textH1Init = () => {
//    const createH1 = document.createElement('h1');
//    createH1.textContent = `rgb(123,123,123)`;
//    document.body.appendChild(createH1);
//};

//const createH1 = document.createElement('h1');

//const getColorParametres = (e) => {
//    const x = e.clientX + 1; //wtedy uzyskamy maximum wynoszace 255
//    const y = e.clientY + 1;
//
//    const red = Math.round((e.clientY+1)* 255 / window.innerHeight);
//    const green = Math.round((e.clientX+1)* 255 / window.innerWidth);
//    const blue = Math.round((green + red) * 0.5);
//
//    createH1.textContent = `rgb(${red},${green})`;
//    createH1.style.position = 'fixed';
//    document.body.appendChild(createH1);
//
//    document.body.style.backgroundColor = 'white';
//
//    if (x%2==0 && y%2==0) {
//        document.body.style.backgroundColor = 'red';
//    } else if (x%2==1 && y%2==1) {
//        document.body.style.backgroundColor = 'blue';
//    } else if (red%2==0 && green%2==1){
//        document.body.style.backgroundColor = 'green';
//    } else {
//        document.body.style.backgroundColor = 'black';
//    }
//}
//document.body.addEventListener('dblclick', getColorParametres);

const createH1 = document.createElement('h1');

document.body.addEventListener('click', (event) => {
  createH1.textContent = `rgb(${event.clientX},${event.clientY})`;
  document.body.appendChild(createH1);
//    const color = getColor(event);
  document.body.style.backgroundColor = getColor(event);
})

const getColor = (c) => {
    if (c.clientX % 2 == 0) {
        if (c.clientY % 2 == 0) {
            return 'red';
        } else {
            return 'green';
        }
    }
    else {
        if (c.clientY % 2 == 0) {
            return 'blue';
        } else {
            return 'black';
        }
    }
}
