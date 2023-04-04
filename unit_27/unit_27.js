// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).
// Все адреса указаны относительно https://api.itgid.info/


// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция:
// создает Promise с fetch (GET) на адрес /api/27/random/random-number
// если response.ok то делает resolve ответа в формате .json().
// В качестве then промиса укажите функцию resolveF1, rejectError.
// функция resolveF1 должна выводить в .out-1 значение true, если случайное число > 50 и false в остальных случаях.
// Задача частично решена - допишите необходимые действия

function f1() {
    const requestHeaders = new Headers();
    requestHeaders.append("apikey", APIKEY);

    const p = new Promise((resolve, reject) =>  {
        fetch(URL +'/api/27/random/random-number', { 
            headers: requestHeaders
        })
        .then(response => {
            if (response.ok) resolve(response.json());
            else reject(response)
        })
        .catch(error => reject(error));
    });

    p.then(resolveF1, rejectError);
}

function rejectError(err) {
    console.log('Houston, We Have a Problem!');
    console.log(err);
}

function resolveF1(data) {
    console.log(data);
    // тут допишите необходимый вывод 
}

document.querySelector('.b-1').addEventListener('click', f1);


// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция:
// создает Promise с fetch (GET) на адрес /api/27/random/random-string
// если response.ok то делает resolve ответа в формате .json().
// В качестве then промиса укажите функцию resolveF2, rejectError.
// функция resolveF2 должна выводить в .out-2 полученную случайную строку.


function f2() {
  
}

function resolveF2(data) {
    console.log(data);
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция:
// с помощью fetch отсылает GET запрос на /api/27/random/random-number?min=1&max=10
// полученный результат - случайное число присвойте в переменную
// employeeId.
// Очередью then делает запрос на /api/27/employee/read/emloyeerId
// выводит в out-3 email полученного сотрудника
// Обратите внимание - задача частично решена. Изучите и допишите код

let emloyeerId;

function f3(){
    const requestHeaders = new Headers();
    requestHeaders.append("apikey", APIKEY);

    fetch(URL + '/api/27/random/random-number?min=1&max=10', {
        headers: requestHeaders
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            emloyeerId = data['random-number'];
            return  fetch(URL + '/api/27/employee/read/' + emloyeerId, {
                headers: requestHeaders
            });
         })
         .then(response => response.json())
         .then(data => {
            console.log(data);
            // допишите вывод
         });
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 
// При нажатии кнопки .b-4 срабатывает функция f4. Функция:
// с помощью fetch отсылает GET запрос на /api/27/employee/random-email
// полученный результат - случайное число присвойте в переменную employeeEmail.
// Очередью then делает запрос на /api/27/employee/email?email=employeeEmail
// выводит в .out-4 name полученного сотрудника
// Обратите внимание - структура кода уже написана. Допишите в нее действия

let employeeEmail;

function f4(){

}

document.querySelector('.b-4').onclick = f4;

// Task 5. 
// При нажатии кнопки .b-5 срабатывает функция f5. Функция:
// с помощью fetch отсылает POST запрос на /api/27/gow/random-world
// полученный результат - случайный мир присваивает в переменную randomWorld.
// Очередью then делает GET запрос на /api/27/gow/world/randomWorld
// выводит в .out-5 имя правителя мира (governor).
// Обратите внимание - структура кода уже написана. Допишите в нее действия

let randomWorld;

function f5(){

}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция :
// создает два промиса, первый посылает запрос на 
// /api/27/random/random-number метод POST
// в теле body POST запроса (form-data) передает значения min которое равно min_1 и max которое равно переменной max_1
// Второй промис на /api/27/random/random-number метод POST
// в теле body POST запроса (form-data) передает значения min которое равно min_2 и max которое равно переменной max_2
//
// Затем результаты получаются через PromiseAll и в .out-6 выводится сумма полученных случайных чисел.
// Задача частично решена - допишите код.


let min_1 = 0;
let max_1 = 20;
let min_2 = 100;
let max_2 = 120;

function f6(){

    const requestHeaders = new Headers();
    requestHeaders.append("apikey", APIKEY);

    const formData1 = new FormData();
    formData1.append('min', min_1);
    formData1.append('max', max_1);

    const formData2 = new FormData();
    formData2.append('min', min_2);
    formData2.append('max', max_2);


    const promise_1 = new Promise((resolve) => {
        fetch(URL + '/api/27/random/random-number', {
            method: "POST",
            headers: requestHeaders,
            body : formData1
        }).then(data => resolve(data.json()));
    
    });
    
    const promise_2 = new Promise((resolve) => {
        fetch(URL + '/api/27/random/random-number', {
            method: "POST",
            headers: requestHeaders,
            body : formData2
        }).then(data => resolve(data.json()));
    });

    Promise.all([promise_1, promise_2 ]).then( data => {
       // выведите в консоль и посмотрите что лежит в data
       // выведите сумму полученных случайных чисел
    })
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция :
// создает два промиса, первый посылает запрос на 
// /api/27/random/random-number
// метод GET
// Второй promise отправляет GET запрос на /api/27/random/random-string
//  метод GET
// Затем результаты получаются через PromiseAll и в .out-71 выводится полученное случайное число
// В out-72 выводится полученная случайна строка


function f7(){
   
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция :
// создает два промиса, первый посылает запрос на 
// /api/27/sr/read/название_расы
// где название_расы получает из select s-81
// метод GET
// Второй promise отправляет GET запрос на /api/27/sr/read?race=название_расы2
// где название_расы получает из select s-82
// Затем результаты получаются через PromiseAll и в .out-8 выводится image полученных рас. Image создаются через createElement, в начале функции .out-8 очищается.
// Промисы создаются и разрешаются в том порядке что описаны. 

const out8 = document.querySelector('.out-8');


function f8(){

}

document.querySelector('.b-8').onclick = f8;

