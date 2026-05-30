/* 
	Напишите функцию find_max(arr), которая находит максимальное значение в списке чисел. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function find_max(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let max = arr[0];
  let i = 1;
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  return max;
}


