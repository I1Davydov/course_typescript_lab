/* 
	Напишите функцию concatenate_strings(arr), объединяющую строки из массива в одну длинную строку. Функция не должна использовать функции высших порядков и оператор ..., можно использовать циклы while или for.
*/

export function concatenate_strings(arr) {
  let result = "";
  let i = 0;
  while (i < arr.length) {
    result += arr[i];
    i++;
  }
  return result;
}
