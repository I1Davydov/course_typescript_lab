/* 
	Напишите функцию strip_special_chars(text), которая удаляет из текста все специальные символы и оставляет только буквы и пробелы.
	Подсказка: для проверки символа можно использовать константу 
	const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
*/

export function strip_special_chars(text) {
  const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  let result = '';
  let i = 0;
  while (i < text.length) {
    const char = text[i];
    if (allowed.includes(char)) {
      result += char;
    }
    i++;
  }
  return result;
}
