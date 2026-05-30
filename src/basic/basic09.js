/* 
	Реализовать функцию fibonacci(n), которая возвращает n-е число последовательности Фибоначчи. Последовательность начинается с 0 и 1, каждое следующее число — сумма двух предыдущих. Функция должна использовать цикл while.
*/

export function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  let i = 2;
  while (i <= n) {
    const temp = a + b;
    a = b;
    b = temp;
    i++;
  }
  return b;
}
