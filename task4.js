/*Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.*/
function showMeDigit(a, b) {
  let intervalId = setInterval(function(){
     console.log(a++);
     if (a > b) {
        clearInterval(intervalId)
     };
  }, 1000)
}

showMeDigit(5, 15);