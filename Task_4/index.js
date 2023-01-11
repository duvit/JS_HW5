const timer = (time) => {
  if (time > 60 * 60) {
    console.log("You need enter time less 1 hour");
    return;
  }

  const timerId = setInterval(() => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    console.log(`${minutes}:${seconds}`);

    if (time <= 1) {
      clearInterval(timerId);
      console.log("Timer End");
    }

    time--;
  }, 1000);

  return timerId;
};

timer(10);