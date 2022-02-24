let colourChoiceButtons = document.querySelectorAll(".modal--choose-colour")
colourChoiceButtons.forEach(i => {i.addEventListener("click", event=> colourChosen(event));console.log(i);return undefined;})
let playerColour;
// Event functions

function colourChosen(event)
{
  if(event.target.tagName.toLowerCase() === "p" || event.target.tagName.toLowerCase() === "span"){};
  playerColour == event.target.first;
};
