/* 
	Реализовать функцию sum<T extends Summable>(a: T[]): T, возвращающую сумму элементов в массиве. Допускается использовать приведение типа Summable к T
*/

export type Summable = {
	sum: (other: Summable) => Summable
}

export function sum<T extends Summable>(a: T[]): T {
  if (a.length === 0) {
    throw new Error('Array is empty');
  }
  let total = a[0];
  let i = 1;
  while (i < a.length) {
    total = total.sum(a[i]) as unknown as T;
    i++;
  }
  return total;
}
