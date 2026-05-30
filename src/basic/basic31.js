/* 
	Реализуйте функцию transposeMatrix(matrix), которая транспонирует матрицу (меняет строки и столбцы местами).
*/

export function transposeMatrix(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  const cols = matrix[0].length;
  if (cols === 0) {
    return [];
  }
  const rows = matrix.length;
  const result = [];
  let j = 0;
  while (j < cols) {
    const newRow = [];
    let i = 0;
    while (i < rows) {
      newRow.push(matrix[i][j]);
      i++;
    }
    result.push(newRow);
    j++;
  }
  return result;
}
