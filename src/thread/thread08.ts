/* 
	Допишите функцию, которая выполняет массив функций и возвращает массив результатов, обрабатывая ошибки отдельных функций.
*/

export function executeFunctionsSafely(functions: (() => any)[]): { result?: any; error?: string }[] {
  const results: { result?: any; error?: string }[] = [];
  for (const func of functions) {
    try {
      const result = func();
      results.push({ result });
    } catch (error) {
      results.push({ error: error instanceof Error ? error.message : String(error) });
    }
  }
  return results;
}
