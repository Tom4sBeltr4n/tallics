let colourChoiceButtons = document.querySelectorAll(".modal--choose-colour")
colourChoiceButtons.forEach(i => {i.addEventListener("click", event=> colourChosen(event));})
let playerColour;
// Event functions

function colourChosen(event)
{
  if(event.target.tagName === "P"){
    playerColour = Array.from(Array.from(event.target.parentNode.childNodes).filter(i=>i.nodeType == 1).filter(i=>i.tagName == "SPAN")[0].classList).filter(i => i == "black" || i == "white")[0]// do not filter classList or childNodes entities without first converting to array
  } else if(event.target.tagName === "SPAN"){
    playerColour = Array.from(event.target.classList).filter(i => i == "black" || i == "white")[0]
  } else{//button, really
    playerColour = Array.from(Array.from(event.target.childNodes).filter(i=>i.nodeType == 1).filter(i=>i.tagName == "SPAN")[0].classList).filter(i => i == "black" || i == "white")[0]
  }
  modalAskRepertoire()
};

function modalAskRepertoire()
{
  console.log("Yay!");
  console.log("Event info: " + event);
  // event
}