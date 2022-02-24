let colourChoiceButtons = document.querySelectorAll(".modal--choose-colour")
colourChoiceButtons.forEach(i => {i.addEventListener("click", event=> colourChosen(event));})
let playerColour;
// Event functions

function colourChosen(event)
{
  console.log(event.target.tagName);
  if(event.target.tagName === "P"){
    console.log(Array.from(Array.from(event.target.parentNode.childNodes).filter(i=>i.nodeType == 1).filter(i=>i.tagName == "SPAN")[0].classList).filter(i => i == "black" || i == "white")[0]);//works

    playerColour = Array.from(Array.from(event.target.parentNode.childNodes).filter(i=>i.nodeType == 1).filter(i=>i.tagName == "SPAN").classList)//.filter(i => {i == "black" || i == "white"}); // do not filter classList or childNodes entities without first converting to array
  } else if(event.target.tagName === "SPAN"){
    playerColour = Array.from(event.target.classList)//.filter(i => {i == "black" || i == "white"});
  } else{
    playerColour = Array.from(Array.from(event.target.childNodes).filter(i=>i.nodeType == 1).filter(i=>i.tagName == "SPAN").classList)//.filter(i => {i == "black" || i == "white"});
  }
  console.log(playerColour);
};
