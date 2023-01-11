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
