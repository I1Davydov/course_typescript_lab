/* 
	Напишите функцию matrixMultiplication(A, B), выполняющую перемножение матриц А и В.
*/

export function matrixMultiplication(A, B) {
  const rowsA = A.length;
  if (rowsA === 0) return [];
  const colsA = A[0].length;
  const rowsB = B.length;
  if (rowsB === 0) return [];
  const colsB = B[0].length;

  const result = [];
  let i = 0;
  while (i < rowsA) {
    result[i] = [];
    let j = 0;
    while (j < colsB) {
      result[i][j] = 0;
      j++;
    }
    i++;
  }

  i = 0;
  while (i < rowsA) {
    let j = 0;
    while (j < colsB) {
      let sum = 0;
      let k = 0;
      while (k < colsA) {
        sum += A[i][k] * B[k][j];
        k++;
      }
      result[i][j] = sum;
      j++;
    }
    i++;
  }

  return result;
}
