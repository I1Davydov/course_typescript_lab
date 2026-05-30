/* 
	Напишите функцию isSymmetric(matrix), проверяющую, симметрична ли матрица относительно главной диагонали. Подсказка: главная диагональ матрицы  — это диагональ, проходящая по элементам матрицы, у которых номер строки и номер столбца одинаковы.
*/

export function isSymmetric(matrix) {
  const rows = matrix.length;
  if (rows === 0) {
    return true;
  }
  const cols = matrix[0].length;
  if (rows !== cols) {
    return false;
  }
  let i = 0;
  while (i < rows) {
    let j = 0;
    while (j < cols) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
      j++;
    }
    i++;
  }
  return true;
}


