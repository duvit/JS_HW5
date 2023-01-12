//Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором - суммирует переданый параметр с тем, что передали первый раз и тд. Запрещается использовать глобальные переменные как хранилище результатов счетчика.

function counter() {
  let count = 0;

  return function (x) {
    count += x;
    return count;
  };
}

let counter1 = counter();

console.log(counter1(3));
console.log(counter1(5));
console.log(counter1(228));
