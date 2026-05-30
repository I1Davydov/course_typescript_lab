/* 
	Напишите функцию average(arr), которая рассчитывает среднее арифметическое элементов массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function average(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum / arr.length;
}

