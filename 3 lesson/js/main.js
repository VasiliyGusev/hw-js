'use strict';

//ЗАДАНИЕ 1


/*
1. Создаём массив.
2. Сздаём цикл for со счётчиком.
3. В теле цикла for задаём условия для достижения условий ТЗ.
4. Для 0 пришлось создавть отдельное условие ...
*/
let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= arrNum.length; i++) {
    if (arrNum[i] == 0) {
        console.log(i + " - это ноль");
    } else if (arrNum[i] % 2 == 1) {
        console.log(i + " - это не чётное число");
    } else if (arrNum[i] % 2 == 0) {
        console.log(i + " - это чётное число");
    }
}


// ЗАДАНИЕ 2


const post = {
        author: "John", //вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2 //вывести это число
                }
            },
            {
                userId: 5, //вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
};

/*
1. Пришлось немного поэкспериментировать, но закономернось 
всё же нашёл и понял как Оно работает.
*/
console.log (post.author);
console.log (post.comments[0].rating.dislikes);
console.log (post.comments[1].userId);
console.log (post.comments[1].text);


// ЗАДАНИЕ 3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/*
1. С помощью метода forEach перебираем все значения price и меняем их.
*/

products.forEach(function(discount){
    discount.price = discount.price - (discount.price * 15 / 100);
});

console.log(products)


// ЗАДАНИЕ 4

const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
            id: 5,
            price: 499,
            photos: []
        },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8, price: 78,
    },
];

/*
1. С помощью метода filter выдёргиваем все элементы со значением photos.
На это задание понадобилось совсем не мало времени. 
А как отсеить пустые значения photos вообще не нашёл.
Пробовал разные варианты:
    - и == true
    - и > 0 
    и т.д
Ни чего не помогло, потом в решених посмотрю.
*/
let getPhoto = products2.filter(function(photo){
    return 'photos' in photo 
});

console.log(getPhoto);
/*
1. Сортируем с помощю метода sort по возрастанию,
    по значению price.
Прошёл по ссылке "документации этого метода", а там уже готовое решение.
Скопировал - вставил - подставил свои значения )
*/
let getPrice = products2.sort( function(a, b){
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
});

console.log(getPrice);

// ЗАДАНИЕ 5

/*
1. Всё же пришлось использовать тело цикла для вывода console.log.
И на внешнюю переменную вешал счётчик и функцией пробовал - ни чего не помогло.
Цикл видит счётчик только внутри тела.
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
};

// ЗАДАНИЕ 6 

/*
1. Создаём переменную со строковым значением.
2. Создаём for со счётчиком в каждой итерации которого конкатенируем 
дополнительный строковый элемент.
Вот только этот for начинает выводить сразу "хх",
по этому и пришлось добавить ещё один console.log.
*/

let slide = 'x';
console.log(slide);

for (let i = 0; i < 20; i++) {
    slide += 'x';
    console.log(slide);
}

