/* 
	Реализуйте функцию splitAndMergeStrings(strArr), которая принимает массив строк, разбивает каждую строку пополам, затем соединяет полученные части обратно в один массив. При разбиении строк нечетной длины первая часть должна быть длины на 1 больше второй части. Строки из одно символа не должны разбиваться.
*/

export function splitAndMergeStrings(strArr) {
  const result = [];
  let i = 0;
  while (i < strArr.length) {
    const s = strArr[i];
    if (s.length === 1) {
      result.push(s);
    } else {
      const firstLen = Math.ceil(s.length / 2);
      const firstPart = s.slice(0, firstLen);
      const secondPart = s.slice(firstLen);
      result.push(firstPart, secondPart);
    }
    i++;
  }
  return result;
}


