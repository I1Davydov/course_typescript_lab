/* 
	Напишите функцию replace_word(sentence, old_word, new_word), заменяющую старое слово новым словом в предложении.
*/

export function replace_word(sentence, old_word, new_word) {
  const words = sentence.split(' ');
  let i = 0;
  const result = [];
  while (i < words.length) {
    if (words[i] === old_word) {
      result.push(new_word);
    } else {
      result.push(words[i]);
    }
    i++;
  }
  return result.join(' ');
}

