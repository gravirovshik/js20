
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

let div1 = document.querySelector('.div-1');
let out1 = document.querySelector('.out-1');

function t1() {
    out1.innerHTML = div1.innerHTML;
}

div1.onclick = t1;  // ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

let div2 = document.querySelector('.div-2');
let out2 = document.querySelector('.out-2');

function t2(e) {
    out2.innerHTML = e.altKey;
}

div2.onclick = t2; // ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let div3 = document.querySelector('.div-3');
let out3 = document.querySelector('.out-3');
let w3 = 75;

function t3() {
    w3 = w3 + 5;
    div3.style.width = w3 + 'px';
}

div3.onclick = t3; // ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

let div4 = document.querySelector('.div-4');
let out4 = document.querySelector('.out-4');

function t4() {
    out4.innerHTML = div4.innerHTML;
}

div4.ondblclick = t4;  // ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

let div5 = document.querySelector('.div-5');

function t5() {
    div5.classList.toggle('active');
}

div5.ondblclick = t5; // ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

let div6 = document.querySelector('.div-6');
let ul6 = document.querySelector('.ul-6');

function t6() {
    ul6.classList.toggle('hide');
}

div6.ondblclick = t6;  // ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

let div7 = document.querySelector('.div-7');

function t7() {
    div7.classList.toggle('active');
    return false;
}

div7.oncontextmenu = t7;  // ваше событие здесь!!!


// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let che = document.querySelector('.ch-8');

function t8() {
    if (che.checked) {
        document.oncontextmenu = () => {
            return false;
        }
    } else {
        document.oncontextmenu = () => {
            return true;
        }
    }
}

che.onchange = t8; // ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

let div9 = document.querySelector('.div-9');
let pic9 = document.querySelector('.div-9>img');

function t9() {
    pic9.src = "img/2.png";
    return false;
}

div9.oncontextmenu = t9; // ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

let div10 = document.querySelector('.div-10');
let pic10 = document.querySelector('.div-10>img');

function t10() {
    pic10.src = "img/2.png";
}

div10.onmouseenter = t10; // ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

let div11 = document.querySelector('.div-11');
let pic11 = document.querySelector('.div-11>img');

function t11() {
    pic11.src = "img/2.png";
}

function t112() {
    pic11.src = "img/1.png";
}

div11.onmouseenter = t11;
div11.onmouseleave = t112;

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let div12 = document.querySelector('.div-12');

function t12() {
    div12.classList.add('active');
}

div12.onmousedown = t12;

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let div13 = document.querySelector('.div-13');

function t13() {
    div13.classList.add('active');
}

function t131() {
    div13.classList.remove('active');
}

div13.onmousedown = t13;
div13.onmouseup = t131;

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

let div14 = document.querySelector('.div-14');

function t14() {
    div14.onclick = div14.classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

let div15 = document.querySelector('.div-15');
let out = 1;

function t15() {
    out++;
    div15.innerHTML = out;
}

div15.onmousemove = t15;


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

let div16 = document.querySelector('.div-16');
let w16 = 75;

function t16() {
    w16++;
    div16.style.width = w16 + 'px';
}

div16.addEventListener('mousemove', t16);

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t171() {
    div16.addEventListener('mousemove', t16);
}
function t172() {
    div16.removeEventListener('mousemove', t16);
}

document.querySelector('.b-171').onclick = t171;
document.querySelector('.b-172').onclick = t172;

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

let div18 = document.querySelector('.div-18');
div18.style.width = 75 + 'px';

function t18() {
    div18.innerHTML = div18.style.width;
}

div18.onmouseenter = t18;

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

let div19 = document.querySelector('.div-19');
let out19 = div19.classList.value;

function t19() {
    div19.innerHTML = out19;
}

div19.onmouseout = t19;

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let progress = document.querySelector('progress');
let out20 = document.querySelector('.out-20');

function t20() {
    progress.value++;
    out20.innerHTML = `Загружено на ${progress.value}%`
}

progress.onmousemove = t20;
// ваше событие здесь!!!