//написать функцию, которая принимает число и функцию, принимающую еще число 
//сумму чисел как результат вывести в консоль
function sum(firstDigit) {
   return function (secondDigit) {
      return firstDigit + secondDigit;
   }
}

console.log(sum(10)(20));




