/* 	
	Напишите функцию capitalize_words(sentence), которая принимает предложение и возвращает его, преобразовав первую букву каждого слова в заглавную.
	Подсказка: разбить предложение на слова можно с помощью метода split, соединить слова с помощью метода join. Для обработки массива слов используйте цикл.
*/

export function capitalize_words(sentence) {
  const words = sentence.split(' ');
  let i = 0;
  const result = [];
  while (i < words.length) {
    const word = words[i];
    if (word) {
      result.push(word[0].toUpperCase() + word.slice(1));
    } else {
      result.push('');
    }
    i++;
  }
  return result.join(' ');
}
