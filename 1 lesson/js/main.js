// Задание 1

let celsius = +prompt('Введите колличество градусов по цельсию:');
let fahrenheit = (9 / 5) * celsius + 32;
alert(celsius + "° по цельсию, это: " + fahrenheit + "° по фаренгейту.")

// Задание 2

let admin = 'Василий'
let name = admin
console.log(name) // странно, VS почему-то name отображает зачёркнутой в этой строке. Но в отладчике всё работает.

// Задание 3

/*
1. Первые две десятки суммируются в порядке ассоциативности как числа и получается 20.
2. Двадцатка конкатенируется со строковым значением и не явно приводится из числового значения в строчное.
3. Получам строковое значение "2010".
4. C помощью console.log выводим firstSum в консоль.
*/
let firstSum = 10 + 10 + "10";
console.log(firstSum);

/*
1. Числовое значение 10 конкатенируется со строковым значением и не явно приводится из числа в строку. И получаем "1010".
2. От перемены мест строкового и числового значения правила не явного приведения - не меняются. И "1010" конкатенируется с числом 10 преобразуя его в строковое значение. 
3. Получам строковое значение "101010".
4. C помощью console.log выводим secondSum в консоль.
*/
let secondSum = 10 + "10" + 10;
console.log(secondSum);

/*
1. Первые две десятки суммируются в порядке ассоциативности как числа и получается 20.
2. Унарный плюс перед строковым значением преобразует его в число. Следовательно полученная ранее двадцатка спокойно суммируется с числовым значением 10. 
3. Получаем числовое значение 30.
4. C помощью console.log выводим thirdSum в консоль.
*/
let thirdSum = 10 + 10 + +"10";
console.log(thirdSum);

/*
1. Вполне логично, что приведение типа происходит перед вычислением ) 
2. Видимо js пустое значение расценивает как 0
3. Деление на 0 даёт бесконечность (Infinity)
4. Унарный минус делает наш нолик отрицательным.
5. Деление числового значения на отрецательный 0 даёт -Infinity
6. C помощью console.log выводим fourthSum в консоль.
*/
let fourthSum = 10 / -"";
console.log(fourthSum);

/*
1. Если между двойкой и пятёркой поставить точку, то результатом получается числовое значение 4, а с запятой получается NaN (не число).
Следовательно :
2. Для обозначения чисел с точкай можно использовать только точку.
3. В нашем примере унарный плюс не смог возвести 2,5 в числовое значение.
4. Деление числового значение на строчное значение - невозможно. JS сообщает, что результатом такого вычисления является "не число" (NaN)
5/ C помощью console.log выводим fifthSum в консоль.
*/
let fifthSum = 10 / +"2,5";
console.log(fifthSum);


// Добавил коммент для создания пул-реквеста )