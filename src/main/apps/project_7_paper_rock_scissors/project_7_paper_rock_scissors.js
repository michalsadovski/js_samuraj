const tableWithFigures = ['paper', 'rock', 'scissors'];

document.querySelector('.winner').innerHTML = "text";


function rockOnClick() {
    console.log(tableWithFigures[1]);
    return tableWithFigures[1];

}

function chooseOnClick() {
document.getElementById(tableWithFigures[1]).onclick = () => {
  alert("rock was clicked");
  document.querySelector('.your_choice').textContent = tableWithFigures[1];
  console.log(tableWithFigures[1]);
}}
chooseOnClick();


//function timeToStart(subject, callback, done) {
//    alert('it is time to start my ' + subject + ' homework.');
//    callback();
//    done();
//}
//
//function finished() {
//    alert('Homework is over.');
//}
//
//timeToStart('math',  finished);


document.getElementById('button').onclick = () => {
   alert("button was clicked");
};

const pc_choice = (e) => {
  const randomChoice = Math.floor(Math.random()*tableWithFigures.length);
  document.querySelector('.pc_choice').textContent = tableWithFigures[randomChoice];
  console.log(tableWithFigures[randomChoice]);
  return tableWithFigures[randomChoice];
}

function count(x, callback) {
  return callback(x)
}

//const paper_choice = (e) => {
//  e.preventDefault();
//  const bool = document.querySelector('.paper').value;
//  console.log("flag = " + bool);
//  document.querySelector('.your_choice').textContent = tableWithFigures[0];
//  console.log(tableWithFigures[0]);
//}

//const rock_choice = (e) => {
//  e.preventDefault();
//  document.querySelector('.your_choice').textContent = tableWithFigures[1];
//  console.log(tableWithFigures[1]);
//}

const scissors_choice = (e) => {
  e.preventDefault();
  document.querySelector('.your_choice').textContent = tableWithFigures[2];
  console.log(tableWithFigures[2]);
}
//
//function change() {
//  var change = document.getElementById("check");
//  if (change.value == "false") {
//      console.log(change.value);
////document.test.submit();
//  } else {
//      change.value = "true";
//      console.log(change.value);
//  }
//}
//

const myFunction = () => {
  document.getElementById("try_it").innerHTML = "Next Game";
}

function theFunction() {
   var element = document.getElementById("myDIV");
   element.classList.toggle("mystyle");
}


//document.querySelector('.paper').addEventListener('click', paper_choice);
//document.querySelector('.rock').addEventListener('click', rock_choice);
document.querySelector('.scissors').addEventListener('click', scissors_choice);
document.querySelector('.play_button').addEventListener('click', pc_choice);
//document.querySelector('.buttonik').addEventListener('click', myFunction);