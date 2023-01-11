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
