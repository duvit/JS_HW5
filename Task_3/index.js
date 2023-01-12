//Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем когда ее вызывали последний раз и теперешним. 
//Вызываем первый раз, то ретерним строку 'Enabled'. Запрещается использовать глобальные переменные как хранилище значений. 

function getTime() {
  const message = "Enabled";
  let start = null;

  return function () {
    let point = +new Date();
    let timeDifference = (point - start) / 1000;

    if (start === null) {
      start = +new Date();
      return message;
    } else {
      start = point;
      return timeDifference;
    }
  };
}

let getTime1 = getTime();

const button = document.querySelector("#button");

button.addEventListener('click', () => console.log(getTime1())  )

