function f1() {
    // создаем объект xhr - объект запроса
    const xhr = new XMLHttpRequest();

    // задаем куда отправить запрос и его параметры
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=691904&units=metric&APPID=f7922902abd3107e3ef9cb6a812c4d36');

    // пишем обработчик ответа, когда наступит событие onload
    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        const data = JSON.parse(xhr.response);
        console.log(data);
        document.querySelector('.out-1').textContent = data.name;
    };

    // отправляем запрос
    xhr.send();
}

// f1();

function f2() {
    // создаем объект xhr - объект запроса
    const xhr = new XMLHttpRequest();
    // задаем куда отправить запрос и его параметры
    xhr.open('GET', 'https://api.itgid.info/api/25/employee/read');

    // Добавляем авторизацию
    xhr.setRequestHeader('apikey', 'TijDLsqWtbz7Ffbr');

    // пишем обработчик ответа, когда наступит событие onload
    xhr.onload = function () {
        console.log(xhr.status);
        // console.log(xhr.response);
        const data = JSON.parse(xhr.response);
        console.log(data);
    };

    // отправляем запрос
    xhr.send();
}

f2();

function f3() {
    // task 11
    const xhr = new XMLHttpRequest();
    xhr.open('POSt', 'https://api.itgid.info/api/25/random/generate-password');
    xhr.setRequestHeader('apikey', 'TijDLsqWtbz7Ffbr');

    // добавляем данные для отправки - Form Data
    const data = new FormData();
    data.append("length", 16);

    // пишем обработчик ответа, когда наступит событие onload
    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        const data = JSON.parse(xhr.response);
        console.log(data);
    };

    // отправляем запрос
    xhr.send(data);
}

// f3();