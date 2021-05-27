'use strict';

//ЗАДАНИЕ 1.1

// в формате es5


// Создаём конструктор для добавления параметров.
function Product (param1, param2) {
    this.name = param1;
    this.price = param2;
};

// Создаём функцию/метод в прототипе
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};

// Создаём объект и отправляем его заполняться в конструктор
let obj1 = new Product('Гусли', 20000);
// Вызываем метод конструктора для нашего объекта
obj1.make25PercentDiscount();
console.log(obj1);


// в формате es6 


// Создаём конструктор для добавления параметров.
class Product2 {
    constructor(param1, param2) {
        this.name = param1;
        this.price = param2;
    }

// Создаём функцию/метод в прототипе
    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
};

// Создаём объект и отправляем его заполняться в конструктор
let obj2 = new Product2('Гармонь', 40000);
// Вызываем метод конструктора для нашего объекта
obj2.make25PercentDiscount();
console.log(obj2);


//ЗАДАНИЕ 1.2

// в формате es5


// Создаём родительский конструктор для добавления параметров.
function Post(param1, param2, param3) {
    this.author = param1;
    this.text = param2;
    this.date = param3;
};
// Создаём функцию/метод в прототипе для замены текста
Post.prototype.edit = function (newText) {
    this.text = newText;
};

// Создаём второй конструктор - наследника предыдущего
function AttachedPost(param1, param2, param3) {
    Post.call(this, param1, param2, param3);
    this.highlighted = false;
};
/*
 Создаём "прослойку", чтобы не занимать лишнюю память (каждый 
 раз создавая новые функции при вызове конструктора).
*/
AttachedPost.prototype = Object.create(Post.prototype);
// Возвращаем конструктор на место
AttachedPost.prototype.constructor = AttachedPost;

// Создаём функцию/метод в дочернем конструкторе.
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

// Создаём объект и вызывам второй конструктор, который в свою очередь подтянет первый.
let bObj = new AttachedPost('Василий', 'парам-пам-пам', Date());

// тут вызов нужных методов
bObj.edit('Трали-Вали');
/*
Сначала задавл значение true здесь в makeTextHighlighted и 
отправлял его в параметры функции, но потом переделал. 
Так вроде ближе к ТЗ.
*/
bObj.makeTextHighlighted(); 
console.log(bObj);


// в формате es6 

// Создаём родительский конструктор для добавления параметров.
class Post2 {
    constructor(param1, param2, param3) {
        this.author = param1;
        this.text = param2;
        this.date = param3;
    }
// Создаём функцию/метод в прототипе для замены текста
    edit (newText) {
        this.text = newText;
    }
};

//Создаём дочерний конструктор
class AttachedPost2 extends Post2 {
    constructor(param1, param2, param3) {
        // Берём параметры из родителя
        super(param1, param2, param3);
        this.highlighted = false;
    }
    // Создаём функцию/метод в дочернем конструкторе.
    makeTextHighlighted() {
        this.highlighted = true;
    }
};

// Создаём объект и вызывам второй конструктор, который в свою очередь подтянет первый.
let bObj2 = new AttachedPost2('Василий', 'парам-пам-пам', Date());

// тут вызов нужных методов
bObj2.edit('Трали-Вали');
bObj2.makeTextHighlighted(); 
console.log(bObj2);