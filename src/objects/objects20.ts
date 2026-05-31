/* 
	Создайте функцию, которая собирает объект из двух массивов: массива ключей и массива значений.
*/

export function fromArrays<T, K extends string>(keys: K[], values: T[]): Record<K, T> {
	const result: Record<K, T> = {} as Record<K, T>;
	const length = Math.min(keys.length, values.length);
	let i = 0;
	while (i < length) {
		result[keys[i]] = values[i];
		i++;
	}
	return result;
}

