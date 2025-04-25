const renderTime = function () {
  secDisplayElem.textContent = counter;
  counter--;

  if (counter == 0) {
    clearInterval(intervalId);
    console.log("Stop");
  }
};

let counter = 59;
const secDisplayElem = document.querySelector("#sec-display");
const intervalId = setInterval(renderTime, 1000);
