/* 
	Реализовать объект counter, который имеет свойство x и метод count, который увеличивает x на 1 и возвращает новое значение.
*/

export const counter = {
  x: 0,
  count() {
    this.x += 1;
    return this.x;
  }
};
