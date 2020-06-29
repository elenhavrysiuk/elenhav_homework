// 1 задача Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function getNumber(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
   else {
    return 0;
  }
}
console.log(getNumber(7, 5));

// 2 задача Написать функцию, которая вычисляет факториал переданного ей числа
function factorial(a) {
  if (a > 0) {
      let i = 1,
          result = 1;
      while (i <= a) {
          result *= i;
          i++;
      }
      return result;
  } else {
      return 1;
  }
}
console.log(factorial(5)) 

// 3 задача Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
let a = +prompt('число');
let b = +prompt('число');
let c = +prompt('число');

function numbers(a, b, c) {
  num = a.toString() + b.toString() +c.toString();
  return num;
}
console.log(numbers(a, b, c));

// або 
function numbers(a, b, c) {
  return a+b+c;
}
console.log(5, 6, 7);

// 4 задача Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
let a = +prompt('Довжина прямокутника');
let d = +prompt('Ширина прямокутника');

let getSquear = (a, d = a) => a * d;
console.log(getSquear(a, d));

//  5 задача Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function delSum(x) {
  let sumNomber = 1;
  for (let i = 2; i <= x/2; i++)
 { if (x % i == 0)
  sumNomber += i;
 }
 return sumNomber == x;
}

console.log(delSum(14))

// 6 задача Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.    

let begin = +prompt('ВВЕДІТЬ ПОЧАТОК ДІОПАЗОНУ');
let end = +prompt('ВВЕДІТЬ КІНЕЦЬ ДІОПАЗОНУ');

let superNum = (a, b) => {
  for (let i = a; i <= b; i++) {
    let v = 0;
    for (let j = 0; j < i; j++) {
      if (i % j == 0) {
        v += j;
      }
    } if (i == v) {
      console.log(i);
  }
}
}
superNum(begin, end);

// 7 задача Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function clock(){
let date = new Date(),
      hours = date.getHours(), 
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
  console.log(hours + ':' + minutes + ':' + seconds);
}
console.log(clock());

// 8 задача Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function timeSec (h, m, s) {
  return (h  % 12) * 3600 + m * 60 + s;
}

console.log(timeSec(7, 00, 00))

// або з викор функції data 

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
console.log(getSecondsToday());

// 9 Количество секунд и переводит их в часи

let time = (n) =>   {
  let hourMf = (n/3600);
  let hour =Math.floor(hourMf);
  let min = Math.floor((hourMf - hour) * 60);
  let sec = n - ((min * 60) + (hour * 3600));

  function allTime (number) {
    return number > 9 ? number : '0' + number; 
  }
  return `${allTime(hour)}:${allTime(min)}:${allTime(sec)}`;
}
 console.log(time(38522));

//  10 Написать функцию, которая считает разницу между датами

let dateDifferents = (h, m = 0, s = 0, h1, m1 = 0, s1 = 0) => {
  if (h == 0) {
    h = 24;
  }
  let sec = h * 60 * 60 + m * 60 + s;
  let sec1 = h1 * 60 * 60 + m1 * 60 + s1;
  let secDifferents = Math.abs(sec - sec1);
  function time (n) {
    let hourMf = (n/3600);
    let hour =Math.floor(hourMf);
    let min = Math.floor((hourMf - hour) * 60);
    let sec = n - ((min * 60) + (hour * 3600));

  function allTime (number) {
     return number > 9 ? number : '0' + number; 
  }
    return `${allTime(hour)}:${allTime(min)}:${allTime(sec)}`;
}
return time(secDifferents);
}
 console.log(dateDifferents(0, 12, 0, 5, 0, 1 ));

















