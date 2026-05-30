/* 
	Напишите функцию second_largest(arr), находящую второе максимальное значение в массиве. Если такого элемента нет - вернуть null. Функцию сортировки использовать нельзя, можно использовать циклы while или for.
*/

export function second_largest(arr) {
  let largest = null;
  let secondLargest = null;
  let i = 0;
  while (i < arr.length) {
    const num = arr[i];
    if (largest === null || num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num !== largest && (secondLargest === null || num > secondLargest)) {
      secondLargest = num;
    }
    i++;
  }
  return secondLargest;
}

