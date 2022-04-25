const statsSection = document.getElementById("statistics");
const statNumbers = document.querySelectorAll("#statistics .stat .number");
let functionStarted = false;

window.onscroll = function() {
  if (window.scrollY >= statsSection.offsetTop) {
    !functionStarted && statNumbers.forEach(number => startCounting(number));
    functionStarted = true;
  }
};

function startCounting(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    element.textContent == goal && clearInterval(count);
  }, 1500 / goal);
}

// Event count down
const daysContainer = document.querySelector(".latest-events .days");
const hoursContainer = document.querySelector(".latest-events .hours");
const minutesContainer = document.querySelector(".latest-events .minutes");
const secondsContainer = document.querySelector(".latest-events .seconds");
const countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

const counter = setInterval(() => {
  const nowDate = new Date().getTime();
  const diffDate = countDownDate - nowDate;

  const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  const minutes = Math.floor((diffDate % (1000 * 60 * 60)) / 1000 / 60);
  const seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

  days >= 10
    ? (daysContainer.innerHTML = days)
    : (daysContainer.innerHTML = `0${days}`);
  hours >= 10
    ? (hoursContainer.innerHTML = hours)
    : (hoursContainer.innerHTML = `0${hours}`);
  minutes >= 10
    ? (minutesContainer.innerHTML = minutes)
    : (minutesContainer.innerHTML = `0${minutes}`);
  seconds >= 10
    ? (secondsContainer.innerHTML = seconds)
    : (secondsContainer.innerHTML = `0${seconds}`);
}, 1000);

console.log(typeof count);
