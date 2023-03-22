const xhr = new XMLHttpRequest();


function f2() {
    // задаем куда отправить запрос и его параметры
    xhr.open('GET', URL + '/api/25/employee/read');
    xhr.setRequestHeader('apikey', APIKEY);

    // пишем обработчик ответа, когда наступит событие onload
    xhr.onload = function () {handler(xhr.response)};

    xhr.send();
}

f2();

function f3() {
    xhr.open('POST', URL + '/api/25/random/generate-password');
    xhr.setRequestHeader('apikey', APIKEY);

    // добавляем данные для отправки - Form Data
    const data = new FormData();
    data.append("length", 16);

    xhr.onload = function () {handler(xhr.response)};
    xhr.send(data);
}

f3();

function handler(data) {
    data = JSON.parse(data);
    console.log(data);
}