function displayGuide(response) {
  // response.data.answer
  let careGuideElement = document.querySelector("#care-guide");
  careGuideElement.innerHTML = response.data.answer;
}

function generateInformation(event) {
  event.preventDefault();

  //Build API Url
  let userInput = document.querySelector("#question-about-plant");
  let apiKey = "0d020a074f787obb6e00f25733t5d32d";
  let context =
    "You are an expert gardener who knows about all the plant varieties, their growing conditions, care plan, pest control measures, watering guide. Your mission is to generate a concise plant care guide with headings in 15 sentences in HTML format. Make sure to follow user instructions. Do not include code blocks and remove any markdown artifacts before displaying. Display better user experience if something goes wrong and show users that information is being generated. ";
  let prompt = `User instructions: Generate a care guide about ${userInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating information..");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  //Make a call to API and add axios
  axios.get(apiUrl).then(displayGuide);
  // display the guide
}

let plantCareElement = document.querySelector("#plant-care-form");
plantCareElement.addEventListener("submit", generateInformation);
