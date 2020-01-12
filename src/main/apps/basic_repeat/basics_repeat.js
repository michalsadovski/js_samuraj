const h1 = document.querySelector('h1');
h1.textContent = 'nowy tekst';
const h1TextContent = h1.textContent;

const p = document.getElementById('p_id');

const strong1 = document.getElementById('strong_id').textContent;
console.log(strong1);

const strong2 = document.getElementsByClassName('strong_class')[0].textContent;
console.log(strong2);

const paper_image = document.getElementsByClassName('paper')[0];
//console.log(paper_image.classList.contains('paper'));

const change = paper_image.classList.toggle('paper');
console.log(change);



//version 1
//function timeToStart(subject, callback) {
//    alert('it is time to start my ' + subject + ' homework.');
//    callback();
//}
//
//timeToStart('math',  function() {
//    alert('Homework is over.')
//})

//version 2
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
//function confirm() {
//    console.log('end of story');
//}
//
//timeToStart('math',  finished, confirm);

const result = function() {
    return 100;
}

function count(number) {
    console.log(number);
    return number;
}
count(result());


const showText1 = function() {
  const text1 = document.createElement('div');
  text1.textContent = 'show text 1';
  document.body.appendChild(text1);
}

const button1 = document.querySelector('button1');
button1.addEventListener('click', showText1);



