function generateInformation(event) {
  event.preventDefault();

  let careGuideElement = document.querySelector("#care-guide");
  careGuideElement.innerHTML = " Your plant guide here..";
}

let plantCareElement = document.querySelector("#plant-care-form");
plantCareElement.addEventListener("submit", generateInformation);
