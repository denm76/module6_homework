/*Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. */
let digit = +prompt("Введите целое число от 2 до 1000");

function isNumberPrime(number) {
  if (number < 2 || number > 1000) {
    alert("Данные не верны!");
    return 0;
  } else {
    if (number === 2) {
      alert("Это простое число!");
      return 0;
    }
    let i = 2;
    const limit = Math.sqrt(number);
    while (i <= limit) {
      if (number % i === 0) {
        alert("Это составное число!");
        return 0;
      }
      i++;
    }
    alert("Это простое число!");
    return 0;
  }
}

isNumberPrime(digit);