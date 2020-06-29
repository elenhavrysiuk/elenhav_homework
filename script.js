// 1 задача Подсчитать сумму всех чисел в заданном пользователем диапазоне

let number1 = +prompt('діапазон початок ');
let number2 = +prompt('діапазон кінець');
let suma = 0;
 while (number1 <= number2) {
     suma = suma + number1;
     number1++;
 }
  console.log (suma)
  
//   2 задача Запросить 2 числа и найти только наибольший общий делитель

let number3 = +prompt('перше число');
let number4 = +prompt('друге число');
while (number3 !=0 && number4 !=0) {
  if (number3 > number4) {
    number3 = number3 % number4;
 } else (number4 = number4 % number3);
  

}
console.log (number3 + number4)

// 3 задача Запросить у пользователя число и вывести все делители этого числа

let number5 = +prompt('будь яке число');

for (let i = 1; i <= number5; i++) {
  if (number5 % i == 0) {
    console.log(i);
  }
}

// 4 задача Определить количество цифр в введенном числе

let number6 = +prompt('будь яке число');
let amount = 0;
for (let i = 0; i< number6; i++) {
  amount = String(number6).length;
}
console.log(amount)

// 5 задача Запросить у пользователя 10 чисел и подсчитать, сколько он ввел +- и 0, чотні нечотні

let pozutNomber = 0;
let negatNomber = 0;
let tchotniNomber = 0;
let notTchotniNomber = 0;
let noleNomber = 0;
 for(let i=0; i<10;++i)
 {
  let numer7= prompt("введіть 10 чисел: ", '');
    if (numer7 > 0 ) {
    pozutNomber++; 
    } else if ( numer7 < 0 ) {
    negatNomber++; 
    } else if (numer7 % 2 == 0) {
    tchotniNomber++;
    } else if (numer7 % 2 ) {
  notTchotniNomber++;
  } else {
  noleNomber++;
 }
}
 console.log("Кількість позитивних: " +pozutNomber);
 console.log("Кількість відємних: " +negatNomber);
 console.log("Кількість нулів: " +negatNomber);
 console.log("Кількість чьотних: " +tchotniNomber);
 console.log("Кількість нечьотних: " +notTchotniNomber);




// 6 задача Зациклить калькулятор.
while(true) {
  const question = prompt('Ви будете продовжувати?, якщо так то введіть 1',);
  if (question == 1) {
let firstNumer = +prompt('Введіть число', '');
let secondNumer = +prompt('Введіть число', '');
let sign = prompt('Ведіть знак');
let result;
if (isNaN(firstNumer) || isNaN(secondNumer)) {
  console.log('Помилка');
} else {
switch (sign) {
  case '+':
   result = firstNumer + secondNumer;
    break;
    case '-':
    result = firstNumer - secondNumer;
      break;
      case '*':
       result = firstNumer * secondNumer;
        break;
        case '/':
          result = firstNumer / secondNumer;
          break;
          default:
}
}
console.log(result);
              } else if (question != 1) {
                break;
              }
            }

// 7 задача Запросить у пользователя число и на сколько цифр его сдвинуть
let count = +prompt('Введите число', 0);
numerYours = +prompt('Наскільки позицій здвинути', 0);
console.log(`Число ${count.slice(numerYours) + count.slice(0, numerYours)}`);


// 8 задача Зациклить вывод дней недели таким образом: «День недели.

const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
let numberDay = 0;

while (confirm(`${days[numberDay]}. Хочете побачити наступний день?`)) {
  numberDay = (numberDay + 1) % days.length;
}


// 9 задача Вывести таблицу умножения для всех чисел от 2 до 9
let a = 0;

for (let i = 2; i < 10; i++) {
	for (let j = 1; j < 10; j++) {
		a = i * j;
	console.log(i + "*" + j + "=" + a)
	}
}

// 10 задача Игра «Угадай число»
let num = Math.floor(Math.random() * 100) +1;
while (true) {
let yourNum = +prompt('Загадай від 0 до 100', "");
if (yourNum > num) {
  alert("Забагато");
  } else if (yourNum < num) {
  alert("Замало");
  } else {
  alert("Ура");
  break;
  }
}

