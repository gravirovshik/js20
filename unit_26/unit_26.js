// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read
// method: GET

// Результат - объект со списком сотрудников. Выведите в out-1 возраст сотрудников через пробел.
// не забывайте для авторизации отправлять apikey с указанным ключом.
let out1 = document.querySelector('.out-1');

async function f1() {

  let str = '';

  fetch(URL + '/api/26/employee/read', {

    method: 'GET',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      for (let el of data.result) {
        str = str + `${el.age} `;
      }
      out1.innerHTML = str;
    });

}

document.querySelector('.b-1').addEventListener('click', f1);


// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read?id=3
// method: GET
// в качестве query параметра задайте id равный числу из input .i-2

// Результат - объект с описанием сотрудника. Выведите в out-2 email полученного сотрудника.

let out2 = document.querySelector('.out-2');
let i2 = document.querySelector('.i-2');

async function f2() {

  fetch(URL + '/api/26/employee/read?id=' + i2.value, {

    method: 'GET',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      if (data.result.email == undefined) {
        out2.innerHTML = data.error;
      }
      else out2.innerHTML = data.result.email;
    });

}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// /api/26/employee/read/5
// method: POST
// число 5 получите из input .i-3

// Результат - объект с описанием сотрудника. Выведите в out-3 name полученного сотрудника.

let out3 = document.querySelector('.out-3');
let i3 = document.querySelector('.i-3');

async function f3() {

  fetch(URL + '/api/26/employee/read/' + i3.value, {

    method: 'POST',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      if (data.result.name == undefined) {
        out3.innerHTML = data.error;
      }
      else out3.innerHTML = data.result.name;
    });

}

document.querySelector('.b-3').onclick = f3;


// Task 4.
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read
// method: POST

// Результат - объект с описанием рас игры КР. Выведите в out-4 название рас (title) через пробел.

let out4 = document.querySelector('.out-4');

async function f4() {

  let str = '';

  fetch(URL + '/api/26/sr/read/', {

    method: 'POST',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      for (let el of data.result) {
        str = str + `${el.title} `;
      }
      out4.innerHTML = str;
    });

}

document.querySelector('.b-4').onclick = f4;

// Task 5.
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read?race=gaal
// method: GET
// где gaal - название расы полученное из select .s-5

// Результат - объект с описанием указанной расы. Выведите в out-5 описание расы (description). Вывод осуществляйте через innerHTML.

let out5 = document.querySelector('.out-5');
let sl5 = document.querySelector('.s-5');

async function f5() {

  console.log(sl5.value);

  fetch(URL + '/api/26/sr/read/?race=' + sl5.value, {

    method: 'GET',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      if ("itemCount" in data) {
        out5.innerHTML = 'Выберите расу';
      }
      else out5.innerHTML = data.result.description;
    });
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/run
// method: GET
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status

let out6 = document.querySelector('.out-6-status');

async function f6() {

  fetch(URL + '/api/26/run', {

    method: 'GET',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      out6.innerHTML = response.status;
    });

}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read/human
// method: POST
// human - название расы из select .s-7

// Результат - объект с описанием указанной расы. Выведите в out-7 изображение расы. Картинку формируйте через createElement.
// В начале функции делайте очистку .out-7.

let out7 = document.querySelector('.out-7');
let sl7 = document.querySelector('.s-7');

async function f7() {

  out7.innerHTML = '';

  fetch(URL + '/api/26/sr/read/' + sl7.value, {

    method: 'POST',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if ('itemCount' in data) {
        out7.innerHTML = 'Выберите расу';
      } else {
        const newImg = document.createElement('img');
        newImg.src = URL + data.result.image;
        out7.appendChild(newImg);
      }

    });

}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: GET
// если запрос отправлен верно, то будет получен объект со случайным числом
// выведите в .out-8 данное число.

let out8 = document.querySelector('.out-8');

async function f8() {

  fetch(URL + '/api/26/random/random-number', {

    method: 'GET',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      out8.innerHTML = data["random-number"];
    });

}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number?min=100&max=110
// method: GET
// где min - число из переменной min. Max - число из переменной max.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-9

let min = 50;
let max = 90;
let out9 = document.querySelector('.out-9');

async function f9() {

  fetch(`${URL}/api/26/random/random-number?min=${min}&max=${max}`, {

    method: 'GET',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      out9.innerHTML = data["random-number"];
    });

}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: POST
// в теле POST запроса передайте параметры min равные переменной min и max равное переменной max. Формат - formdata.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-10

let out10 = document.querySelector('.out-10');

let body10 = new FormData();
body10.append('min', min);
body10.append('max', max);

async function f10() {

  fetch(URL + '/api/26/random/random-number', {

    method: 'POST',
    body: body10,

    headers: {
      'apikey': APIKEY,
      'Content-type': 'multipart/form-data'
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      out10.innerHTML = data["random-number"];
    });
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-string?length=16
// method: GET
// Значение длины строки получаем из input .i-16

// Если запрос сделан правильно, то сервер возвратит объект с строкой случайных символов длиной 16.
// Выведите строку в .out-11

let out11 = document.querySelector('.out-11');
let i11 = document.querySelector('.i-11');

async function f11() {

  fetch(`${URL}/api/26/random/random-string?length=${i11.value}`, {

    method: 'GET',

    headers: {
      'apikey': APIKEY,
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      out11.innerHTML = data["random-string"];
    });

}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data)
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.

let out12 = document.querySelector('.out-12');
let i12 = document.querySelector('.i-12');
let ch12 = document.querySelector('.ch-12');

async function f12() {

  let symbol = 0;
  if (ch12.checked) {
    symbol = 1;
  }

  const body12 = new FormData();
  body12.append('length', i12.value);
  body12.append('symbols', symbol);


  fetch(URL + '/api/26/random/generate-password', {

    method: 'POST',
    body: body12,

    headers: {
      'apikey': APIKEY,
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      out12.innerHTML = data.password;
    });

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data)
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.

let out13 = document.querySelector('.out-13');
let i13 = document.querySelector('.i-13');
let ch131 = document.querySelector('.ch-131');
let ch132 = document.querySelector('.ch-132');


async function f13() {

  let symbol = 0;
  if (ch131.checked) {
    symbol = 1;
  }

  let upp = 0;
  if (ch132.checked) {
    upp = 1;
  }

  const body13 = new FormData();
  body13.append('length', i13.value);
  body13.append('symbols', symbol);
  body13.append('uppercase', upp);


  fetch(URL + '/api/26/random/generate-password', {

    method: 'POST',
    body: body13,

    headers: {
      'apikey': APIKEY,
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      out13.innerHTML = data.password;
    });

}

document.querySelector('.b-13').onclick = f13;


// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world
// method: GET
// если все сделано верно, то получите объект с описанием миров игры GoW
// выведите в .out-14 title миров через пробел.

let out14 = document.querySelector('.out-14');

async function f14() {

  fetch(`${URL}/api/26/gow/world`, {

    method: 'GET',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {

      console.log(data);
      let str = '';

      for (let el of data.worlds) {
        str = str + `${el.title} `;
      }

      out14.innerHTML = str;

    });

}

document.querySelector('.b-14').onclick = f14;


// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-15
// выведите описание мира (description) в out-15

let out15 = document.querySelector('.out-15');
let sl15 = document.querySelector('.s-15');

async function f15() {

  out15.innerHTML = '';

  fetch(URL + '/api/26/gow/world/' + sl15.value, {

    method: 'GET',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if ('itemCount' in data) {
        out15.innerHTML = 'Выберите мир';
      } else {
        out15.innerHTML = data.world.description;
      }

    });

}


document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/governor/сурт
// method: GET
// имя правителя - получите из select .s-16
// если все сделано верно, то получите объект с описанием мира где правитель Сурт игры GoW.
// выведите в .out-16 руну данного мира. Как изображение (createElement). Очищайте out-16 в начале функции.

let out16 = document.querySelector('.out-16');
let sl16 = document.querySelector('.s-16');

async function f16() {

  out16.innerHTML = '';

  fetch(URL + '/api/26/gow/governor/' + sl16.value, {

    method: 'GET',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const newImg = document.createElement('img');
      newImg.src = URL + data.world.rune;
      out16.appendChild(newImg);

    });

}


document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/get-time
// method: POST
// если все сделано верно, то получите объект с текущим временем сервера.
// выведите в .out-17 время в формате час:минуты

let out17 = document.querySelector('.out-17');

async function f17() {

  out17.innerHTML = '';

  fetch(URL + '/api/26/get-time', {

    method: 'POST',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      out17.innerHTML = `${data.time.h}:${data.time.m}`;
    });

}


document.querySelector('.b-17').onclick = f17;


// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/rune
// method: POST
// если все сделано верно, то получите объект с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира.
// выполните очистку .out-18 в начале функции

let out18 = document.querySelector('.out-18');

async function f18() {

  out18.innerHTML = '';

  fetch(URL + '/api/26/gow/rune', {

    method: 'POST',

    headers: {
      'apikey': APIKEY,
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {

      console.log(data);

      for (let key in data.rune) {

        let newImg = document.createElement('img');
        newImg.setAttribute("alt", key);
        newImg.src = URL + data.rune[key];
        out18.appendChild(newImg);

      }

    });


}


document.querySelector('.b-18').onclick = f18;
