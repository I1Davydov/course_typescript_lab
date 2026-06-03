/* 
	Допишите функцию безопасного деления, чтобы она возвращала null при делении на ноль вместо выбрасывания ошибки.
*/

export function safeDivide(a: number, b: number): number | null {
  if (b === 0) {
    return null;
  }
  return a / b;
}
