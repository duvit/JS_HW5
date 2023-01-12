//Создать функцию которая будет возвращать массив в котором будут лежать все значения - аргументы переданные в данную функцию. Но если мы ничего не передадим в параметрах, то массив очистится. Запрещается использовать глобальные переменные как хранилище значений.

function getUpdatedArr() {
  let storage = [];

  return function (x) {
    if (x === undefined) {
      storage.length = 0;
      return storage.slice();
    }
    storage.push(x);
    return storage.slice();
  };
}

let getUpdatedArr1 = getUpdatedArr();

console.log(getUpdatedArr1(3));
console.log(getUpdatedArr1(5));
console.log(getUpdatedArr1({ name: "Vasya" }));
console.log(getUpdatedArr1());
console.log(getUpdatedArr1(4));
