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
      return timeDifference;
    }

    start = point;
  };
}

let getTime1 = getTime();

console.log(getTime1());
setTimeout(() => console.log(getTime1()), 2000);
setTimeout(() => console.log(getTime1()), 3000);
setTimeout(() => console.log(getTime1()), 5000);
