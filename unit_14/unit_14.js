
let myParent = document.querySelector('.select-inside');

let listValue = ["London","Minsk","Tashkent","Kyiv"];
let listOption = ["Лондон","Минск","Ташкент","Киев"];

let selectList = document.createElement("select");
selectList.className = "sel";
myParent.appendChild(selectList);

for (var i = 0; i < listValue.length; i++) {
    var option = document.createElement("option");
    option.value = listValue[i];
    option.text = listOption[i];
    selectList.appendChild(option);
}



const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "70e1ed322b02acbc57d443dd91065f3e"
}


function getWeather() {

    const cityName = document.querySelector('.sel').value;

    fetch(`${param.url}weather?q=${cityName}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        })
        .then(showWeather)
        .catch(function () {
            //  catch any errors
        });
}

function showWeather(data) {
    // console.log(data);
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.city-temp').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.wheather-desc').textContent = data.weather[0]['description'];
    document.querySelector('.wind-deg').innerHTML = Math.round(data.wind.deg) + '&deg;';
    document.querySelector('.wind-speed').innerHTML = Math.round(data.wind.speed) + ' m/s';
    document.querySelector('.pressure').innerHTML = Math.round(data.main.pressure * 0.75) + ' мм рт. ст.';
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector('.sel').onchange = getWeather;
