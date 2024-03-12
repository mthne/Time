const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function secondFormat(number) {
  return number < 10 ? "0" + number : number;
}

function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

  secondsElement.textContent = secondFormat(seconds);
  minutesElement.textContent = secondFormat(minutes) + ":";
  hoursElement.textContent = secondFormat(hours) + ":";
}
updateTime();
setInterval(updateTime, 1000);
