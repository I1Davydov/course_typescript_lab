/* 
	Реализовать функцию maxOf<T extends Comparable>(a: T[]): T, возвращающую максимальное значение в массиве.
*/

export type Comparable = {
	greaterThan: (other: Comparable) => boolean
}

export function maxOf<T extends Comparable>(a: T[]): T {
  if (a.length === 0) {
    throw new Error('Array is empty');
  }
  let max = a[0];
  let i = 1;
  while (i < a.length) {
    if (a[i].greaterThan(max)) {
      max = a[i];
    }
    i++;
  }
  return max;
}