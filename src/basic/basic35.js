/* 
	Реализуйте функцию diagonalSum(matrix), которая вычисляет сумму элементов главной диагонали матрицы.
*/

export function diagonalSum(matrix) {
  let sum = 0;
  let i = 0;
  while (i < matrix.length) {
    sum += matrix[i][i];
    i++;
  }
  return sum;
}
