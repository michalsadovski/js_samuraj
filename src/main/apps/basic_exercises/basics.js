const tipsAndTricks = 'Tips & Tricks:';
console.log(tipsAndTricks.toUpperCase());

console.log('');
console.log('OPERATOR PORÓWNANIA:');
console.log('2' == 2); //dokonuje konwersji typów
console.log('2' === 2); //brak konwersji typów a więc porównuje też typ
console.log(!!200); //podwójna negacja
console.log(3 > 2 ? 'operator warunkowy zwraca prawde' : 'operator warunkowy zwraca falsz'); //operator warunkowy

console.log('');
console.log('NUMBERS:');

console.log('potegowanie; ' + 2**6);

var number = 154.46542
console.log(number);
console.log(number.toFixed());
console.log(number.toFixed(1));
console.log(number.toFixed(2));
console.log('tekst: ' + number.toString());
console.log(number.toString(2)); //system dwojkowy
console.log('Is integer?: ' + Number.isInteger(100.1));
console.log('Is integer?: ' + Number.isInteger(100.0));
console.log('Is finite?: ' + Number.isFinite(50));
var noNumber = new Number();
console.log(noNumber);
var numberAsString = new Number("221");
console.log('new Number("221"): ' + numberAsString);
console.log('Number(true): ' + Number(true));

console.log('');
console.log('KONWERSJA NIEJAWNA i JAWNA:');
console.log('0 + null: ' + (0 + null));
console.log('zamiana slowa na liczbe, trick1: ' + '200' * 1);
console.log('zamiana slowa na liczbe, trick2: ' + parseInt('200', 10)); //10 oznacza system dziesietny
console.log('zamiana liczby na slowo, trick1: ' + 200 + '');
console.log('zamiana liczby na slowo, trick2: ' + 200..toString());
console.log('zamiana liczby na slowo, trick3: ' + String(200));
console.log('zamiana wyrazenia slowno-liczbowego na liczbe, trick1: ' + parseInt('200abc')); //parseInt usuwa litery jesli liczba wystepuje na poczatku
console.log('zamiana liczby z miejscami po przecinku na calkowita, trick1: ' + parseInt(22.55)); //parseInt usuwa cyfry po kropce

console.log('');
console.log('ZAOKRĄGLANIE:');
console.log('zaokraglenie w gore: ' + Math.round(200.55));
console.log('zaokraglenie w dol: ' + Math.round(200.45));
console.log('zaokraglenie, do calych: ' + Math.floor(200.55));
console.log('zaokraglenie, trick1: ' + Math.random());

console.log('');
console.log('PRZYPISANIE OBIEKTU DO ZMIENNEJ:');

var logo = new String('Adidas');
var year = new Number(1982);
var justify = new Boolean(true);
console.log(logo + ' in ' + year + '? That can not be ' + justify);

console.log('');
console.log('STRINGS:');

var country = 'Polska Rzeczpospolita Ludowa';
console.log(country.length);
console.log(country['length']);
console.log('8 litera: ' + country[8]);
//console.log(typeof country);
console.log(country.indexOf('R'));
console.log('charAt: ' + country.charAt(10)); //zwroc litere (liczone od 0)
console.log('concat: ' + country.concat(' byla sobie kiedys.'));
console.log('$country: ' + '$country - kiedys byla');
console.log('inclues(): ' + country.includes('Rzeczpospolita'));
console.log('trim(): ' + '   alejakto'.trim());
console.log('slice(): ' + country.slice(7, 12));
console.log('backslash: ' + 'Rzecz\\pospolita');
console.log('nowa linia: ' + 'Rzecz \n pospolita');
console.log('superText gravis: ' + `tekst na 3 linijki
 z cudzyslowiem "
i apostrofem' `);
console.log('konwersja: ' + ("" + true));

console.log('');
console.log('BOOLEAN:');
console.log('Jak sprawdzic czy formularz jest wypelniony: ' + Boolean("khjgkjhgkjh"));
console.log('1' == true) // konwersja na number ale bez konwersji typu
console.log('1' === true) // konwersja na number ze sprawdzeniem typu

console.log('');
console.log('OPERATOR WARUNKOWY:');
var condition = 2;
  if (condition) {
    console.log('Dzien dobry, tekst wyswietlil sie.');
//    alert('dziala');
  }

var firstName = 'Somsiad';
    if (firstName) {
      console.log('Witaj ' + firstName);
//      alert('Witam ' + firstName);
    }

console.log('');
console.log('POJEDYNCZY IF Z NUMBER');
var hasTicket = false;
var moreThen15years = true;

    if (hasTicket && moreThen15years) {
      console.log('Warunki spelnione');
    } else if (hasTicket || moreThen15years) {
        console.log('Tylko jeden warunek spelniony')
    } else {
       console.log('Zaden warunek nie spelniony')
    };

console.log('');
console.log('POJEDYNCZY IF ZE STRING');

var yearResponse = null;

    if (yearResponse <= 18 && typeof yearResponse === 'number') {
      console.log('you are young');
    } else if (yearResponse <= 70 && typeof yearResponse === 'number') {
        console.log('you are adult')
    } else {
       console.log('You are old or your age has not been entered yet')
    };

console.log('');
console.log('PODWOJNY IF');

 var yearCheck = 65;
 var userName = '';

  if (userName) {
     if (yearResponse <= 18 && typeof yearResponse === 'number') {
         console.log('you are too young ' + userName)
     } else if (yearResponse <= 70 && typeof yearResponse === 'number') {
         console.log('you may enter ' + userName)
     } else {
         console.log('you may not enter because of age ' + userName)
     }
  } else {
  console.log('you must enter name first')
  };

  userName ? console.log('mozesz wejsc ' + userName) : console.log('podaj choc imie');

console.log('');
console.log('OPERATOR WARUNKOWY');

let gameResult = 0;
let killedMonsters = 11;
gameResult += killedMonsters > 10 ? '. Przechodzisz dalej' : '. Przegrales, koniec'
console.log('Wynik gry: ' + gameResult);

const playerName = '';
console.log(`Witaj ${playerName ? playerName : 'nieznajomy czlowieku.'}`);


console.log('');
console.log('SWITCH');

const dayOfTheWeek = 'niedziela';

  switch (dayOfTheWeek) {
    case 'poniedzialek':
      console.log(dayOfTheWeek + ': poczatek tygodnia');
      break;
    case 'piatek':
      console.log(dayOfTheWeek + ': weekend blisko');
      break;
    case 'sobota':
      console.log(dayOfTheWeek + ': to w domu robota');
      break;
    case 'niedziela':
      console.log(dayOfTheWeek + '? church time!');
      break;
    default:
      console.log('tydzien leci pilnuj dzieci');
      break;
  };

console.log('');
console.log('TABLES:');
const colours = ['red','white','green'];
const newColours = ['purple','black','pink'];
console.log(colours);
console.log(newColours);
console.log('dodanie elementu w tablicy:');
newColours[newColours.length] = "brown";
console.log(newColours);
console.log('zmiana ostatniego elementu w tablicy:');
newColours[newColours.length-1] = 'yellow';
console.log(newColours);
console.log('usuniecie elementu z tablicy (ale dlugosc pozostaje taka sama):');
delete newColours[0];
console.log(newColours);
console.log('zmiana dlugosci tablicy:');
newColours.length += 2;
console.log(newColours);
console.log('wyzerowanie tablicy:');
newColours.length = 0;
console.log(newColours);
console.log('rozne obiekty w jednej tablicy, destrukturyzacja:');
const [nameUser, idUser, ageUser] = ['Adam', 1010, 15];
console.log('idUser = ' + idUser);

console.log('');
console.log('ZMIENNE - push, unshift, pop, shirt, concat:');

const arrayOfNames = ['Anna', 'Zosia', 'Janek', 'Kajtek'];
console.log('Aktualna tablica: ' + arrayOfNames);
console.log('');

console.log('dodanie ostatniego elementu do tablicy (push):');
//arrayOfNames.push('Zygfryd');
const arrayLength = arrayOfNames.push('Zygfryd');
console.log('nowa tablica: ' + arrayOfNames);
console.log('dlugosc tablicy: ' + arrayLength);
console.log('');

console.log('dodanie pierwszego elementu do tablicy (unshift):');
//arrayOfNames.unshift('Boleslaw');
const newArrayLength = arrayOfNames.unshift('Boleslaw');
console.log('nowa tablica: ' + arrayOfNames);
console.log('dlugosc tablicy: ' + newArrayLength);
console.log('');

console.log('usuwanie ostatniego elementu z tablicy (pop):');
const deletedLastUser = arrayOfNames.pop();
console.log('kogo usunalem: ' + deletedLastUser);
console.log('nowa tablica: ' + arrayOfNames);
console.log('');

console.log('usuwanie pierwszego elementu z tablicy (shift):');
const deletedFirstUser = arrayOfNames.shift();
console.log('kogo usunalem: ' + deletedFirstUser);
console.log('nowa tablica: ' + arrayOfNames);
console.log('');

console.log('stworzenie nowej tablicy z dwoch wczesniejszych (concat):');
const someColours = new Array('darkred', 'lightgrey', 'navyblue');
console.log('table1 = ' + colours);
console.log('table2 = ' + someColours);
const oneMoreTableWithColours = colours.concat(someColours);
console.log('table after concat = ' + oneMoreTableWithColours);
const finalColours = colours.concat(someColours, ['lightgreen']);
console.log('table after next concat = ' + finalColours);

console.log('');
console.log('stworzenie nowej tablicy z dwoch wczesniejszych (spread: ...):');

const tableWithGermanCars = ['Audi','Bmw','Mercedes'];
console.log(tableWithGermanCars);
const tableWithJapaneaseCars = new Array('Lexus','Mazda','Infinity');
console.log(tableWithJapaneaseCars);
const carsTogetherTable = [...tableWithGermanCars, ...tableWithJapaneaseCars];
console.log('table after using spread = ' + carsTogetherTable);
console.log('and one from Korea = ' + new Array(...tableWithGermanCars, ...tableWithJapaneaseCars, ...['Genesis']));

console.log('wycinamy tablice do okreslonego elementu, sliced(2,3)');
const slicedTable = carsTogetherTable.slice(3);
console.log(slicedTable);

console.log('');
console.log('wycinamy tablice od-do okreslonego elementu, sliced(2,3)');
const newSlicedTable = carsTogetherTable.slice(2,3);
console.log(newSlicedTable);

console.log('');
console.log('wycinamy tablice, ile od konca zwrocic, tu ostatnie dwa elementy zostana wysw. (slice(-2))');
const newNextSlicedTable = carsTogetherTable.slice(-2);
console.log(newNextSlicedTable);

console.log('');
console.log('wycinamy kawalek tablicy, wskazujac od ktorego elementu oraz ich ilosc kolejno (splice(1, 2))');
const threeDigitNumbersArray = new Array('111','222','333','444','555','666');
threeDigitNumbersArray.splice(1,2)
console.log(threeDigitNumbersArray);

console.log('wycinamy kawalek tablicy od danego elementu do konca (splice(3))');
const twoDigitNumbersArray = new Array('11','22','33','44','55','66');
twoDigitNumbersArray.splice(3);
console.log(twoDigitNumbersArray);

console.log('zerujemy tablice - sposob 1 (splice(0))');
twoDigitNumbersArray.splice(0);
console.log(twoDigitNumbersArray);

console.log('zerujemy tablice - sposob 2 table.length');
threeDigitNumbersArray.length = 0;
console.log(threeDigitNumbersArray);

console.log('wycinamy kawalek tablicy od danego elementu do konca (splice(3))');
twoDigitNumbersArray.splice(3);
console.log(twoDigitNumbersArray);

console.log('zastapienie elementow tablicy innymi splice(0,2)');
const threeLetterWordsTable = new Array('aaa','bbb','cc','ddd','www','zzz');
console.log(threeLetterWordsTable);

console.log('zmiana 2 elementow od indeksu 4:');
threeLetterWordsTable.splice(4,2, 'eee', 'fff');
console.log(threeLetterWordsTable);

console.log('zmiana 1 elementu od indeksu 2:');
threeLetterWordsTable.splice(2,1, 'ccc');
console.log(threeLetterWordsTable);

console.log('zastapienie jednego elementu dwoma:');
threeLetterWordsTable.splice(5,2, 'fff', 'ggg');
console.log(threeLetterWordsTable);

console.log('dodanie elementu po indeksie 2:');
threeLetterWordsTable.splice(2,0, '222');
console.log(threeLetterWordsTable);

console.log('');
console.log('SORTOWANIE');
const tableWithGreekLetters = ['Beta','Gamma','Alfa'];
console.log('przed sortem = ' + tableWithGreekLetters);
console.log('po sort() = ' + tableWithGreekLetters.sort());
console.log('');

console.log('');
console.log('SZUKANIE ELEMENTU W TABLICY');
console.log(tableWithGreekLetters);
console.log('indexOf() =>Gamma = ' + tableWithGreekLetters.indexOf('Gamma'));
console.log('incluedes() =>Gamma = ' + tableWithGreekLetters.includes('Gamma'));
console.log('join() = ' + tableWithGreekLetters.join('(przecinek po item) \n '));
console.log('reverse() = ' + tableWithGreekLetters.reverse());
console.log('');

console.log('');
console.log('STRING W TABLICE');
const poland = 'Rzeczpospolita';
console.log('dzieli litera po literze:');
const polandTable = poland.split('');
console.log(polandTable);
console.log('dzieli po przecinku:');
const someNames = 'Marek, Zenek, Romek, Ziutek';
console.log(someNames.split(','));
const datesOfBirth = '1967,1987, 1997, 2001';
const datesOfBirthTable = datesOfBirth.split(',');
console.log(datesOfBirthTable[0]);

console.log('');
console.log('PĘTLE');

for (let doFirstLoop = 0; doFirstLoop < 10; doFirstLoop++) {
  console.log('petla pierwsza  ' + doFirstLoop);
}

let doSecondLoop = 0;
for (; doSecondLoop < 10;) {
  console.log('petla druga ' + doSecondLoop);
  doSecondLoop++;
}

let doThirdLoop = 0;
while (doThirdLoop < 10) {
  doThirdLoop++;
  console.log('petla trzecia ' + doThirdLoop);
  }


let gasolineIndex = 40;
let endOfGasoline = 0;

while (gasolineIndex > endOfGasoline) {
  console.log('Masz ' + gasolineIndex + ' l paliwa.');
  gasolineIndex = gasolineIndex - 10;
}
//alert('Nie ma juz paliwa.');

let coinLevel = 20;
let noCoins = 0;

do {
  console.log('There are ' + coinLevel + ' zl in bankmachine.');
  coinLevel -= 5;
} while (coinLevel > noCoins);


console.log('');
console.log('PĘTLA W PETLI');

for (let i=1; i<=5; i++) {
  for (let j=1; j<=5; j++) {
//    console.log(i + ' x ' + j + ' = ' + i*j);
    console.log(`${i} x ${j} = ${i*j}`);
  }
}

for (const car of carsTogetherTable) {
  console.log('moj kolejny samochod: ' + car)
  }


console.log('');
console.log('ZWRACANIE WARTOSCI Z FUNKCJI');

console.log('tu nie zadziala hoisting, bo przypisujemy funkcje do const:');
const showMessage = function(message) {
  console.log(message);
}
showMessage('to jest jakas funkcja');

console.log('');
console.log('a tu nie ma przypisania do const, wiec tu zadziala hoisting - funkcja moze zostac wywolana z dowolnego miejsca w kodzie:');

addNumbers(2,4);

function addNumbers(numberOne, numberTwo) {
  const result = numberOne + numberTwo;
  console.log(result);
  return result;
}

console.log('uruchomienie alertu');
//const textAlert = new Function('text', 'alert(text);');
//textAlert('leci alert : )');

const arrowFunction = (inputText) => {
  console.log(inputText)
};
arrowFunction('to jest test funkcji strzalkowej');


console.log('');
console.log('FUNKCJE W ES6');

console.log('Tworzenie funkcji za pomoca tzw. fat arrow');

const addNumbersFatArrow = (x, y) => {
  const resultOfFunction = x + y;
  console.log(resultOfFunction);
  return resultOfFunction;
}
addNumbersFatArrow(2,18);

const addNumbersClassicWay = function(x, y) {
  const resultOfFunction = x + y;
  console.log(resultOfFunction);
  return resultOfFunction;
}
addNumbersClassicWay(15,15);

const addNumbersDefaultValuesFatArrow = (x = 2, y = 0) => {
  const resultOfFunction = x + y;
  console.log(resultOfFunction);
  return resultOfFunction;
}
addNumbersDefaultValuesFatArrow();


console.log('');
console.log('CALLBACK');

function count(x, callback) {
  return callback(x)
}

function addOne(numberIncreasing) {
  numberIncreasing++;
  console.log(numberIncreasing);
  return numberIncreasing;
}

function subtractOne(numberDecreasing) {
  numberDecreasing--;
  console.log(numberDecreasing);
  return numberDecreasing;
}

count(5, addOne);
count(5, subtractOne);


//setInterval(() => console.log('minely 2 sekundy'), 2000);

const showLastingTime = () => { console.log('minely 2 sekundy'); }
//setInterval(showLastingTime, 3000);


console.log('');
console.log('FUNKCJA STRZALKOWA');

const userBirthDate = new Array(1982,1988,1965,1944,1928,1999);
const currentYear = 2019;

userBirthDate.forEach(
   function(userBirthDate) {
     console.log('Wiek uzytkownika to ' + (currentYear - userBirthDate));
   }
);

console.log('');

const usersAge = new Array(82,88,65,44,28,99);
usersAge.forEach(
  usersAge => console.log(`Wiek uzytkownika to ${usersAge}`)
);

console.log('');
console.log('ARGUMENTS');

//const showArguments = [6456,897897,56456,98789,56456,89789,56456,98789,65456];
const showArguments = function() {
  console.log(arguments);
  console.log('arguments.length = ' + arguments.length);
  console.log('arguments[0] = ' + arguments[0]);
  console.log('typeof arguments = ' + typeof arguments);
  console.log('Array.isArray(arguments) = ' + Array.isArray(arguments));
}
showArguments(1, null, 'javajava', {});

console.log('');
console.log('SUMOWANIE WARTOSCI W TABLICY');

const resultOfAddingArguments = function() {
  let result = 0;
  for(i=0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

const usersMoney = resultOfAddingArguments(65465,6546,89789,56456,89789,32123);
console.log([65465,6546,89789,56456,89789,32123]);
console.log('suma wartosci elementow tablicy = ' + usersMoney);

console.log('');
console.log('INFORMACJA O UZYTKOWNIKU W ZALEZNOSCI OD LICZBY ARGUMENTOW');


function showInfoAboutUser(age, name, sex) {
  switch (arguments.length) {
    case 1:
      console.log(`uzytkownik ma ${age} lat.`);
      break;
    case 2:
      console.log(`uzytkownik ma ${age} lat i nazywa sie ${name}`);
      break;
    case 3:
      console.log(`uzytkownik ma ${age} lat, nazywa sie ${name} i jest ${sex}`);
      break;
    default:
      console.log('brak informacji o uzytkowniku');
      break;
  };
}
showInfoAboutUser();
showInfoAboutUser(55);
showInfoAboutUser(15, 'Alek');
showInfoAboutUser(18, 'Anna', 'kobieta');


console.log('');
console.log('UMIESZCZANIE ZMIENNYCH W TABLICY');

function throwElementsIntoTable(...items) {
  console.log(items);
  console.log('items[2] = ' + items[2]);
  return items;
}
throwElementsIntoTable('agda',null,'fdaf',true, 15);


console.log('');
console.log('KONKATENACJA ELEMENTOW UMIESZCZONYCH W TABLICY');


//=======================
console.log('Sposob 1:');
//=======================
function addWordsTogether(...words) {
  let result = '';
  for(let i=0; i<words.length; i++) {
    result += `${words[i]} `;
  }
  console.log('addWordTogether = ' + result);
}
addWordsTogether('Jarek ma',322,'lata,',true,'?')


//=======================
console.log('Sposob 2:');
//=======================
function addWordsTogetherWithForeach(...words) {
  let result = '';
  words.forEach((item) => {
    result += `${item} `;
})
  console.log(result);
}
addWordsTogetherWithForeach('Leokadia','ma',3,'siwe','wlosy');


//=======================
console.log('Sposob 3:');
//=======================
function addWordsTogetherWithForeachShort(...words) {
  let result = '';
  words.forEach(word => result += `${word} `)
  console.log(result);
}
addWordsTogetherWithForeachShort('Pije',5,'piw','Zubr');

//=======================
console.log('showUsers');
//=======================
function showPartyUsers(owner, ...others) {
  console.log(`Uczestnicy imprezy to: ${owner} ${others.length ? 'oraz ' + others + '.' : '.'}`);
}

showPartyUsers('Michal');
showPartyUsers('Michal','Kasia','Ewa','Andrzej','Nowa');

console.log('');
console.log('metoda w funkcji:');
const objectExample = {
  showName: () => {
    console.log('tu jest jakas informacja');
  }
}
objectExample.showName();

const showName = () => {
  console.log('tu jest jakas informacja');
}
showName();

console.log('DOSTEP DO ZMIENNYCH LOKALNYCH');

function calculateNumbers(a, b) {

  function add(numberOne, numberTwo) {
    const result = numberOne + numberTwo;
    console.log(result);
    return result;
  }
  add(a, b);
}
calculateNumbers(2,3);

console.log('');
console.log('WPROWADZENIE DO OBIEKTOW');

console.log('tworzenie obiektu za pomoca konstruktora:');
const cat = new Object();
cat.meow = function() {
  console.log('miau mial');
}
cat.meow();

console.log('tworzenie obiektu z przypisaniem mu wlasciwosci:');

const dog = {
  name: 'Nowa',
  age: 4,
  barking: function() {
    console.log('hau hau');
  },
  singing: () => {
    console.log('lalala');
  },
  // ES6
  eating() {
    console.log('mlask mlask');
  }
}
dog.singing();
dog.eating();
dog.names = ['Azor','Reksio','Gruby','Fafik'];
console.log(dog.names);
console.log(dog.names[0]);

delete dog.names[0];
console.log(dog.names);

console.log('');
console.log('ODWOLANIE SIE DO OBIEKTU');

//const someMethod = {
//  value: 1
//}
//function plus() {
//  someMethod.value++;
//}

const counter = {
  score: 0,
  increment: function() {
    this.score++;
    console.log(this.score);
  }
}
counter.increment();
counter.increment();
counter.increment();


console.log('');
console.log('OPERACJE NA STRINGACH');

const tekst1 = `gravis "w cudzyslowie" `;
const tekst2 = 'zwykly literal Stringa \"w cudzyslowie\"';
const tekst3 = `gravis
nie
wymaga
uzycia
backslash n`;
const tekst4 = 'zwykly \nnawias \nwymaga \nuzycia \nbackslash n';

console.log(tekst1);
console.log(tekst2);
console.log(tekst3);
console.log(tekst4);

const inputName = 'Michal Sadowski';
const greeting = `Jestem ${inputName}`;
console.log(greeting);

const user1 = 65;
const user2 = 98;
const user3 = 44;
console.log(`Sredni wiek osob wynosi ${(user1 + user2 + user3) / 3} a laczny ${(user1+user2+user3)}`);

console.log(`Obecnie zegarek wskazuje ${new Date().toLocaleString()}`);

const toPay = 53;
const tax = 23;
console.log(`Laczna cena wynosi ${(toPay + (toPay*tax)/100).toFixed(2)} zlotych`);
console.log(`${(toPay + (toPay*tax)/100).toFixed(2)}` > 80 ? 'sporo' : 'nieduzo');

console.log('');
console.log('========== DOCUMENT OBJECT MODEL ==========');
console.log('');
console.log('STWORZENIE TABLICY Z DOSTEPNYCH OBRAZKOW');

const imgs1 = Array.from(document.images);
const imgs2 = [...document.images];

console.log(imgs1);
console.log(imgs2);

console.log(imgs1[0]);

document.querySelector('li:nth-child(3)');
const firstElement = document.getElementById('first');
const secondElement = document.getElementById('even');
const allUls = document.querySelectorAll('* ul>li');
const queryRefreshButton = document.querySelector('#getRefreshButton'); //tablico podobny obiekt
const theRefreshButton = document.getElementById('getRefreshButton');
const liElementsByTagName = document.getElementsByTagName('li'); //tablico podobny obiekt
const liElementsByClassName = document.getElementsByClassName('even'); //tablico podobny obiekt

console.log('');
console.log('OPERACJE NA document.get... (+ wlasciwosc)');

console.log(firstElement);
console.log(secondElement);
console.log(queryRefreshButton);
console.log(theRefreshButton);
console.log(liElementsByTagName);
console.log(liElementsByClassName);

console.log('');

const liList = document.querySelectorAll('li'); //zebranie do zbioru tabico podobnego
const liArray = [...liList]; //konwersja na tablice, sposob 1
const liArray2 = Array.from(liList); //konwersja na tablice, sposob 2
console.log(liArray);
console.log(liArray2);

console.log('');
console.log('POBIERANIE ATRYBUTÓW Z ELEMENTÓW:');
const h2Result = document.querySelector('h2');
console.log(h2Result.getAttribute('class'));

// drugi, krotszy sposob:

console.log(document.querySelector('h2').getAttribute('class'));

const h2Class = h2Result.textContent;
console.log(h2Class);

const h2innerHtml = h2Result.innerHTML;
console.log(h2innerHtml);

console.log(document.body.textContent);
console.log(document.body.innerHTML);

console.log(document.querySelector('h2').classList.contains('title'));


console.log('');
console.log('MODYFIKACJA ELEMENTÓW:');

const firstFromLiList = document.querySelector('li:first-child');
console.log(firstFromLiList);
console.log(firstFromLiList.innerHTML);

firstFromLiList.textContent = 'teraz jest nowy punkt 1';
firstFromLiList.innerHTML = '<strong>uwaga uwaga</strong> oto nowy, kolejny punkt 1';
firstFromLiList.style.fontSize = '25px';
firstFromLiList.style.letterSpacing = '3px';
firstFromLiList.style.backgroundColor = "#ccc";


firstFromLiList.classList.add('space');
console.log(firstFromLiList.classList.contains('space'));
firstFromLiList.classList.remove('space');
console.log(firstFromLiList.classList.contains('space'));
const toggleButton = firstFromLiList.classList.toggle('space');
console.log(firstFromLiList.classList.contains('space'));

//firstFromLiList.className('space star'); nadpisanie klasy "space"

firstFromLiList.id = 'third'; //nadpisanie id
firstFromLiList.id = 'first';

firstFromLiList.setAttribute('title', 'Uwaga wazne');
firstFromLiList.setAttribute('id', 'firrrst');

const liItems = document.querySelectorAll('li');
console.log(liItems);
//liItems[1].style.fontSize = '40px';

for (let i = 2; i < liItems.length; i++) {
  liItems[i].style.fontSize = '35px';
  liItems[i].classList.add('red');
}

liItems.forEach(function(singleliItem) {
  singleliItem.style.textDecoration = 'underline';
  singleliItem.style.fontSize = '50';
  singleliItem.classList.add('green');
})

console.log('');
console.log('Zmiana w tablice');
const liItemsAsTable = [...document.querySelectorAll('li')];
console.log(liItemsAsTable);



console.log('');
console.log('NASŁUCHIWANIE');


window.addEventListener('scroll', () => {
  console.log('skrolowanie');
});

window.addEventListener('dblclick', () => {
  console.log('podwojny click');
});

//window.addEventListener('click', () => {
//  console.log('pojedynczy click');
//});

console.log('to samo z przypisaniem do funkcji anonimowej');

//const clickFunction = () => {
//    console.log('pojedynczy click')
//};
//window.addEventListener('click', clickFunction);


//document.body.addEventListener('click', () => {
//  console.log('klikniecie');
//});

document.querySelector('h1').addEventListener
  ('click', function() {
  this.textContent += '+';
});

document.querySelector('h2').addEventListener
  ('mousemove', function() {
    this.textContent += '+';
    console.log('ruch myszka po h2');
  })

const h3Class = document.querySelector('h3');
const addNewText = function() {
  this.textContent += ' :)';
  this.classList.toggle('red'); //red bierze z main.css (.red)
};
h3Class.addEventListener('click', addNewText);

const someItems = document.querySelectorAll('li');
const addClassRed = function() {
  console.log('klik li dziala');
};

someItems.forEach((someItem) => someItem.addEventListener('click', addClassRed));

const addLiElement = document.createElement('li');
addLiElement.textContent = 'Ostatni element';
addLiElement.style.backgroundColor = 'yellow';
document.querySelector('ul').appendChild(addLiElement);

const addDivElement = document.createElement('div');
addDivElement.textContent = 'Div dodany na koncu przed zamknieciem body';
addDivElement.style.backgroundColor = 'red';
document.body.appendChild(addDivElement);

console.log('OBIEKTY: window, document');
console.log('document.title = ' + document.title);
console.log('document.domain = ' + document.domain);
console.log('document.body:');
console.log(document.body);
console.log('window.innerHeight = ' + window.innerHeight);
console.log('window.innerWidth = ' + window.window.innerWidth);
console.log('window.scrollY = ' + window.scrollY);

console.log('');
console.log('setTimeout');

//const showTimeLasted = () => {
//  alert('Minelo 3 sekundy');
//}
//setTimeout(showTimeLasted, 3000);
//
//console.log('');
//console.log('setInterval');
//
//let timer = 0;
//setInterval(function() { console.log(timer++) }, 5000);



//const timeSpentInfo = () => {
//timeSpend += 5;
//console.log(`Jestes tutaj juz ${timeSpend} sekund`);
//setTimeout(timeSpentInfo, 5000);
//};
//
//let timeSpend = 0;
//setTimeout(timeSpentInfo, 5000);