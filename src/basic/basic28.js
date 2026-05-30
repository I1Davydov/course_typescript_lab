/* 
	Реализуйте функцию removeDuplicates(arr), которая удаляет повторяющиеся элементы из массива с помощью методов indexOf и push.
*/

export function removeDuplicates(arr) {
  const result = [];
  let i = 0;
  while (i < arr.length) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}
