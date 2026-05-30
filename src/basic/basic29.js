/* 
	Реализуйте функцию rotateArrayLeft(arr), которая сдвигает элементы массива влево на одну позицию с помощью методов shift и push. Предусмотрти случай, когда массив пустой.
*/

export function rotateArrayLeft(arr) {
  const result = [...arr];
  if (result.length > 0) {
    result.push(result.shift());
  }
  return result;
}
