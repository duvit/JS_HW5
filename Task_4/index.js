let time = 70;

const timer = setInterval(() => {
  const thisTime = time;
  let seconds = 0;
  let minutes = 0;

  if (time > 3600) {
    alert('You need enter time less 1 hour');
    clearInterval(timer);
  }
  else if (time < 60) {
    minutes = "00";
    seconds = time.toString().padStart(2, "0");
  } else {
    minutes = Math.floor(thisTime / 60)
      .toString()
      .padStart(2, "0");
    seconds = (thisTime % 60).toString().padStart(2, "0");
  }

  console.log(`${minutes}:${seconds}`);

  if (time <= 1) {
    clearInterval(timer);
    console.log("Timer End");
  }
  time--;
}, 1000);

