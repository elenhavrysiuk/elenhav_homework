// 1 задача Вік людини і ким вона являється
 
let age = prompt ('Скільки років?');

if (age >= 0 && age <= 12) {
    alert('дитина');
} else if (age <= 18) {
    alert('підліток');
} else if (age <= 60) {
    alert('дорослий');
} else if (age > 60) {
    alert('пенсіонер');
} else {
    alert('ніхто');
}    


// 2 задача  число від 0 до 9 і спецсимвол

let nomer = prompt('Введіть число від 0 до 9');
 
if (nomer == 1) {
    alert('!');
} else if (nomer == 2) {
    alert ('@');
} else if (nomer == 3) {
    alert ('#');
} else if (nomer == 4) {
    alert ('$');
} else if (nomer == 5) {
    alert ('%');
} else if (nomer == 6) {
    alert ('^');
} else if (nomer == 7) {
    alert ('&');
} else if (nomer == 8) {
    alert ('*');
} else if (nomer == 9) {
    alert ('(');
} else if (nomer == 0) {
    alert (')');
} else {
    alert('nothing');
}

// 3 задача  вести трьохзначне число чи є однакові числа

let number = +prompt('Введіть трьохзначне число:');
let number1 = parseInt(number / 100);
let number2 = parseInt(number / 10) % 10;
let number3 = number % 10;
 
if (number1 === number2 || number2 === number3 || number1 === number3) {
    alert('Є однакові числа');
} else {
    alert('немає однакових чисел');
}

// 4 задача чи високосний рік

let year = prompt('Введіть рік');
let firstyear = year % 4;
let secondyear = year % 100;
let thierdyear = year % 400;

if ((thierdyear == 0) || (firstyear == 0) && (secondyear !== 0)) {
    alert('Високосний рік');
} else {
    alert('Не високосний');
}

// 5 задача паліндром 5-ти значне число (чомусь не виходить)

let b;
let c;
let d;
let e;
let a= +prompt('Введіть пятизначне число', '');
if ((a > 9999) && (a < 100000)) {
    b = a / 10000;
    a = a % 10000;
    c = a / 1000;
    a = a / 1000;
    a = a % 100;
    e = a / 10;
    a = a % 10;
if ((b == a) && (c == e))
{
    alert('Паліндром');
} else {
    alert('Не паліндром');
}
} else {
    alert('Це не пятизначне число');
} 

// 6 задача конвертор валют

let cash = prompt('Сума USD');
let currency = prompt('виберіть валюту: EUR, UAN, AZN');
 
switch (currency) {
    case 'EUR':
        alert(cash * 0.88);
        break;   

     case 'UAN':
        alert(cash * 26.65);
         break;   

     case 'AZN':
         alert(cash * 1.7);
         break;   
         default:
         alert('Невідома валюта');    
}

//  7 задача Сума зі знижкою
let price = prompt('Сума покупки');

    if (price >= 200 && price < 300) {
        alert(price - price * ('3' / '100'));
}
else if (price >= 300 && price < 500) {
    alert(price - price * ('5' / '100'));
}
else if (price >= 500) {
    alert(price - price * ('7' / '100'));
} else {
    alert('Too much');
}

/* 8 довжина круга і периметр квадрата, чи входить коло в квадрат 
 (Діаметр кола має бути рівним або меншим довжини сторони квадрата)*/ 

let cicuit =prompt('Довжина кола');
let perimetrSquare =prompt(' Периметр квадрата');
let dismetrCircle = cicuit / Math.PI;
let dismetrsquare = perimetrSquare / 4;

if (dismetrCircle <= dismetrsquare) {
    alert(true);
} else {
    alert(false);
}
// 9 задача задати питання і підрахувати кількість балів

let firstquastion = prompt('Скільки буде 2+2? а -3, b- 4, c - 9');
let secondquastion = prompt('Найдовша річка України? а -Дніпро, b- Устя c- Горинь');
let therdquastion = prompt('Яка тварина каже мяу? a -собака, b - слон, c- кіт');
let bally= 0;
    if (firstquastion == 'b')
    bally += 2;
    if (secondquastion == 'a')
    bally += 2;
    if (therdquastion == 'c')
    bally += 2;
    alert('Сума балів' + bally);

    // 10 вичислити наступну дату (сама не додумалася)

        let date = prompt('Ведіть дату - день-місяць-рік');
        date = date.split('-');
        let oldDate = new Date(date[2], date[1]-1, date[0]);
        oldDate.setDate(oldDate.getDate()+1);
        alert(oldDate);







