/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.  */

let array = [3, 19, 24, true, NaN, 0, { d: 23 }, 37, 42, 2, null];

function countOfEvenOddZero(arr) {
  let countEven = 0;
  let countOdd = 0;
  let zeroCount = 0;
  arr.forEach(function (item) {
    if (typeof (item) == 'number' && !isNaN(item)) {
      if (item == 0) {
        console.log("Нулевой элемент!");
        zeroCount++;
      } else if (item % 2 == 0) {
        countEven++;
      } else {
        countOdd++;
      }
    }
  });
  console.log(`Чётных чисел: ${countEven}\n Нечетных чисел: ${countOdd}\n Нулей: ${zeroCount}`);
}

countOfEvenOddZero(array);