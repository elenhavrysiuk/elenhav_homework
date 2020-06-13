// 1 задачв
let firstName = prompt('Як Вас звати?');
alert('Привіт,' + firstName);

// 2 задача
let yourage = prompt('В якому році Ви народились?');
const year = 2020;

let result = year - yourage; 

alert(result);

// 3 задача
let lenght =prompt ('Вкажіть довжину сторони квадрата');
alert(lenght * lenght);

// 4 задача
let radius =prompt ('Вкажіть радіус кола');
const pi =3.14;

alert(radius * radius * pi);

// 5 задача через консоль
let distance = prompt('Відстань між містами');
let timeDistance = prompt('Час за який дістатись');
console.log(distance / timeDistance);

// 6 задача
let dollars = prompt('Сума в доларах');
const exchengeRate =0.80;
console.log(dollars * exchengeRate);

// 7 задача
let flashSize = prompt('Різмір флешки в ГБ');
const megabytes =1000;
const megabytesNumber =820;
console.log(flashSize * megabytes / megabytesNumber);

// 8 задача
let cach = prompt('Сума в гаманці');
const prise = prompt ('ціна шоколадки');
let quantityChocolate = (cach / prise);
let restMoney = (cach - quantityChocolate * prise);
console.log(quantityChocolate, restMoney);


// 9 задача

let numeric = prompt('Введіть трьохзначне число');
let results=0;
results= numeric % 10;
numeric= numeric/10;
console.log(results);


// 10 задача

let sizeMoney = prompt('Сума вкладу');
const procent =0.05;
const years =12;
let month = prompt ('На скільки місяців дожити суму коштів');
let procentSum = ((sizeMoney * procent) / years * month);
console.log(procentSum);


