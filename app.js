let convertType = "miles";
const heading = document.querySelector("h1");
const intro = document.querySelector("p");
const answerDiv = document.getElementById("answer");
const form = document.getElementById("convert");
let innerInput = document.getElementById("distance");

document.addEventListener("keydown", (e) => {
  let key = e.code;
  if (key === "KeyK") {
    convertType = "kilometers";
    heading.innerHTML = "Kilometres to Miles Converter";
    intro.innerHTML =
      "Type in a number of kilometers and click the button to convert the distance to miles";
  } else if (key === "KeyM") {
    convertType = "miles";
    heading.innerHTML = "Miles to Kilometres Converter";
    intro.innerHTML =
      "Type in a number of miles  and click the button to convert the distance to kilometers";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let distance = parseFloat(document.getElementById("distance").value);
  if (distance) {
    //   convert M to K 1.609344
    //   convert K to M 0.621371192
    if (convertType == "miles") {
      let converted = distance * 1.609344;
      answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;
    } else {
      let converted = distance * 0.621371192;
      answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles`;
    }
  } else {
    answerDiv.innerHTML = "<h2> Please provide a number! </h2>";
  }
  innerInput.value = "";
});
