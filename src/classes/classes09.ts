/* 	
	В классе Product нужно добавить статическое свойство discountRate, указывающее скидку на товары, и статический метод applyDiscount, применяющий скидку ко всей продукции.
*/

export class Product {
    static discountRate: number = 0;
   name: string;
   price: number;
   constructor(name: string, price: number) {
     this.name = name;
     this.price = price;
   }
   describe() {
     console.log(`Продукт: ${this.name}, цена: ${this.price}`);
   } 
   static applyDiscount(products: Product[]) {
     for (const product of products) {
       product.price = product.price * (1 - Product.discountRate);
     }
   }
}
