
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая по событию keydown считывает содержимое event.key и добавляет в .out-1. Во всех последующих задачах - работаем с латиницей и цифрами. */
let out1 = document.querySelector('.out-1');
let str1 = '';

function t1(event) {
    console.log(event.key);
    str1 = str1 + `${event.key} `;
    out1.innerHTML = str1;
    return event.key;
}

document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая по событию onkeypress выводит в out-2 числовой код символа (event.keyCode). */
let out2 = document.querySelector('.out-2');
let str2 = '';

function t2(event) {
    console.log(event);
    str2 = str2 + `${event.keyCode} `;
    out2.innerHTML = str2;
}

document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте keyCode. */
let out3 = document.querySelector('.out-3');

function t3(event) {
    if ((event.keyCode > 47) && (event.keyCode < 58)) {
        out3.innerHTML = true;
    }
    else out3.innerHTML = false;
}

document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */
let out4 = document.querySelector('.out-4');
let str4 = '';
let k4;

function t4(event) {

    console.log(event.keyCode);
    k4 = event.keyCode;

    if ((k4 < 65) || (k4 > 90)) {
        str4 = str4 + String.fromCharCode(k4);
    }

    out4.innerHTML = str4;
}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

let out5 = document.querySelector('.out-5');
let str5 = '';
let k5;

function t5(event) {
    console.log(event);
    k5 = event.keyCode;
    if ((k5 > 96) && (k5 < 123)) {
        k5 = k5 - 32;
        str5 = str5 + String.fromCharCode(k5);
    } else str5 = str5 + String.fromCharCode(k5);
    out5.innerHTML = str5;
}
document.querySelector('.i-5').onkeypress = t5;
// document.querySelector('.i-5').onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая позволяет вводить в i-6 только символы в нижнем регистре. Т.е. мы до функции создаем строку. Внутри функции проверяем код символа. Если символ - в нижнем регистре - добавляем в строку. Потом принудительно присваиваем строку в value input i-6. Чтобы блокировать стандартный вывод в input в конце функции пишем return false;  */
let str6 = '';
let k6;

function t6(event) {
    k6 = event.keyCode;

    if ((k6 > 96) && (k6 < 123)) {
        str6 = str6 + String.fromCharCode(k6);
    }
    document.querySelector('.i-6').value = str6;
    return false;
}

document.querySelector('.i-6').onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

const a7 = ['a', 'z', 'x', 'w', 'y', 't'];
let num7;
let out7 = document.querySelector('.out-7');

function t7() {
    num7 = Math.floor(Math.random() * (6 - 0)) + 0;
    out7.innerHTML = a7[num7];
}

document.querySelector('.i-7').onkeydown = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая дописывает в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

const a8 = {
    i: 1,
    o: 0,
    l: 7
}

let key8;
let str8 = '';
let out8 = document.querySelector('.out-8');

function t8(event) {

    key8 = event.key;

    if (key8 in a8) {
        str8 = str8 + `${a8[key8]} `;
    } else str8 = str8 + `${key8} `;

    out8.innerHTML = str8;

    // 1. Получаем из event введенный символ
    // 2. Проверяем наличие такого ключа в a8 - уже делали это раньше!!!!
    // 3. Если есть дописываем в out-8 символ из массива a8. Если нет - введенный символ.
}

document.querySelector('.i-8').onkeydown = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество (число) нажатых клавиш стрелка вниз. */

let out9 = document.querySelector('.out-9');
let num9 = 0;

function t9(event) {
    console.log(event.key);

    if (event.key == 'ArrowDown') {
        num9++;
    }

    out9.innerHTML = num9;
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и блок .block-10. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину блока. Клавиши стрелка вверх и вниз - увеличивать высоту блока. Одно нажатие клавиши - 1px. */

let h = 75;
let w = 75;
let b10 = document.querySelector('.block-10');

function t10(event) {
    console.log(event.key);

    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        w++;
        b10.style.width = `${w}px`;
    } else if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
        h++;
        b10.style.height = `${h}px`;
    }
    // увеличиваем  h, w, потом присваиваем как свойства...
}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект.
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится.
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/
let keys11 = document.getElementsByClassName('keyboard');

function t11(event) {

    for (let el of keys11) {
        el.classList.remove('active');
    }

    for (let el of keys11) {
        if (event.key == el.getAttribute('data')) {
            el.classList.add('active');
        }
    }

}

document.querySelector('.i-11').onkeydown = t11;

