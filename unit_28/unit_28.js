//  Задания юнита расположены на сайте.
// const goods_1 = new Goods('apple', 23.5);
// console.log(goods_1);

const goods_1 = new Goods('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400 );
console.log(goods_1);

const goods_2 = new Goods('carrot', 50, 'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/carrot-256.png', 40 );
console.log(goods_1);

// И теперь выведем на страницу

document.querySelector('.out-3').append(goods_1.draw());
document.querySelector('.out-4').append(goods_2.draw());

const goods_7 = new Goods2('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400, true );
console.log(goods_7);
// И теперь выведем на страницу
document.querySelector('.out-7').append(goods_7.draw());


const v12 = new Valid2('test@ua.ua', 'qwertyu');
console.log(v12.validate());
console.log(v12.isValid);
console.log(v12.error_message);

const v13 = new Valid2('test@ua.ua', 'qwe');
console.log(v13.validate());
console.log(v13.isValid);
console.log(v13.error_message);

const v14 = new Valid2('', 'qwertyu');
console.log(v14.validate());
console.log(v14.isValid);
console.log(v14.error_message);