/* 
	 Допишите функцию withRetry, которая пытается выполнить операцию несколько раз перед тем как сдаться.
*/

export async function withRetry<T>(
  operation: () => Promise<T>,
  maxAttempts: number = 3
): Promise<T> {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxAttempts - 1) {
        throw error;
      }
    }
  }
  throw new Error('Unexpected state in withRetry');
}
