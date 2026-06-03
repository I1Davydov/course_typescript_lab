/* 
	 Допишите функцию безопасного получения элемента массива, чтобы она возвращала undefined при выходе за границы.
*/

export function getArrayElement<T>(array: T[], index: number): T | undefined {
  if (index < 0 || index >= array.length) {
    return undefined;
  }
  return array[index];
}
