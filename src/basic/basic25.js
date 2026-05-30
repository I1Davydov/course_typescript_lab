/* 
	Реализуйте функцию removeFirstOccurrence(arr, value), которая удаляет первое вхождение указанного элемента из массива
*/

export function removeFirstOccurrence (arr, value) {
  const result = [];
  let removed = false;
  let i = 0;
  while (i < arr.length) {
    if (!removed && arr[i] === value) {
      removed = true;
    } else {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}
