/* 
	Реализуйте функцию zeroRowColumn(matrix, row, col), которая превращает в ноль всю строку и весь столбец матрицы, соответствующие указанным индексам.
*/

export function zeroRowColumn(matrix, row, col) {
  const result = [];
  let i = 0;
  while (i < matrix.length) {
    result[i] = [...matrix[i]];
    i++;
  }

  let j = 0;
  while (j < result[row].length) {
    result[row][j] = 0;
    j++;
  }

  i = 0;
  while (i < result.length) {
    result[i][col] = 0;
    i++;
  }

  return result;
}
