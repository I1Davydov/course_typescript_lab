/* 
	Реализуйте функцию sum_positive(arr), которая складывает положительные элементы массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function sum_positive(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
    i++;
  }
  return sum;
}


