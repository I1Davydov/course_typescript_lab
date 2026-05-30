/* 
	Реализуйте функцию reverse_list(arr), которая переворачивает порядок элементов массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function reverse_list(arr) {
  const result = [];
  let i = arr.length - 1;
  while (i >= 0) {
    result.push(arr[i]);
    i--;
  }
  return result;
}

