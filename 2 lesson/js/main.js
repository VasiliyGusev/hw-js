// ЗАДАНИЕ 1

//пример 1
/*
1. Ни разу такого не видел, 
но судя по первой строке - есть возможность каскадно 
присваивать переменным значения через запятую.
2. В а и b присваиваются значения 1.
3. В c и d присваиваются значения undefined т.к. они пустые (просто обявляются).
*/

let a = 1, b = 1, c, d;
/*
1. Так как инкримент находится в ПРЕфиксной форме - результат его вычисления 
присваевается переменной c.
*/
c = ++a; 
alert(c); // ответ: 2

//пример 2
/*
1. Так как инкримент нафодится в ПОСТфиксной форме - результат его вычисления 
НЕ присваивается переменной d, а просто сохраняется в переменную и b становится равной 2. 
2. Пременная d получает значение b до вычисления инкримента.
*/
d = b++;
alert(d); //ответ: 1

//пример 3
/*
1. Благодаря предыдущим вычислениям, на данный момент переменная a имеет значение = 2.
2. К перменной а снова добавляем инкримент в ПРЕфиксной форме и получам значение 3.
3. Суммируем числовое значение 2 со значением а, получаем 5.
*/
c = 2 + ++a;
alert(c); //ответ: 5

//пример 4
/*
1. Благодаря предыдущим вычислениям, на данный момент переменная b имеет значение = 2.
2. Так как инкримент нафодится в ПОСТфиксной форме, то Двойка будет суммироваться со 
старым значением переменной b.
3. В пременную d присваивается результат суммирования числового значения 2 и значения переменной b.
4. Инкримент в ПОСТфиксной форме добавляет +1 к переменной b.
5. Всё сходится.
*/
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3


// ЗАДАНИЕ 2

/*
1. Переменной а присваивается значение 2.
*/
a = 2;
/*
1. В скобках, переменная а равная двум одновременно и умножается на 2 
и присваевает в себя результат этого умножения. И становится = 4
2. х принимает значения результата суммирования 1 + 4. И становится = 5
*/
let x = 1 + (a *= 2);


// ЗАДАНИЕ 3

/*
Видимо я не правильно понял задание !
Так как пункт с "разными знаками" был указан как более сложный вариант,
а здесь он оказался не сложнее чем первые два ...
*/

/**
 * Получаем рандомное целочисленное значение
 */
 function random () {
    let min = -680;
    let max = 789;
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

a = random();
b = random();

/**
 * Высчитываем согластно условиям ТЗ
 */
function calculating (num1, num2) {
    if (num1 >= 0 && num2 >= 0) {
        alert("Калькуляция третьего задания равна: " + (num1 - num2));
    } else if (num1 < 0 && num2 < 0) {
        alert("Калькуляция третьего задания равна: " + num1 * num2);
    } else {
        alert("Калькуляция третьего задания равна: " + (num1 + num2));
    }
}

console.log(calculating(a, b));


// ЗАДАНИЕ 4

/*
1. Сначала одно хотелел попробовать ... потом другое ...
    В итоге их объеденил и - ОНО заработало !!!))))))) 
2. JS похоже очень интересный язык )))
3. Вот только return тут некуда воткнуть. Хоть он и должен быть по условиям ДЗ.
    Но я его в прошлом задании использовал, надеюсь зачтётся.
*/

let plus = document.getElementById('plus').onclick = function () {
    alert(a + b);
}

let minus = document.getElementById('minus').onclick = function () {
    alert(a - b);
}

let divide = document.getElementById('divide').onclick = function () {
    alert((a / b).toFixed(2));
}

let multiply = document.getElementById('multiply').onclick = function () {
    alert(a * b);
}


// ЗАДАНИЕ 5


/*
1. Мне сложно сейчас писать конструктивные комментарии так-как сейчас 5:30 утра )
2. Согласно условиям ДЗ должен был использовать функции из Четвёртого задания,
но там получилось нечто другое ...
3. Тем не менее - со всеми задачами код справляется.
*/

let result = "";



function mathOperation(arg1, arg2, operation) {
    switch (operation){
        case plus:
            result = arg1 + arg2;
            return result;
        case minus:
            result = arg1 - arg2;
            return result;
        case divide:
            result = (arg1 / arg2).toFixed(2);
            return result;
        case multiply:
            result = arg1 * arg2;
            return result;
    }
}

result = mathOperation (a, b, divide);
alert(result);

// задание со * не успеваю сделать - скоро вставать ... 
// обязательно доберусь до него