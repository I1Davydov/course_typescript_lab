/* 
	РРеализуйте функцию extractUniqueValues(arr1, arr2), которая берет уникальные элементы первого массива и помещает их в конец второго массива с помощью методов indexOf и push.
*/

export function extractUniqueValues(arr1, arr2) {
  const result = [...arr2];
  let i = 0;
  while (i < arr1.length) {
    const elem = arr1[i];
    if (arr2.indexOf(elem) === -1 && result.indexOf(elem) === -1) {
      result.push(elem);
    }
    i++;
  }
  return result;
}

