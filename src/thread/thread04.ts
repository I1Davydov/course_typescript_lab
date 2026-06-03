/* 
	Допишите функцию асинхронного запроса, чтобы она обрабатывала ошибки и возвращала fallback-значение.
*/

export async function fetchWithFallback(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    return response.text();
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
}


