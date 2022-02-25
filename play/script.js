let colourChoiceButtons = document.querySelectorAll(".modal--choose-colour")
colourChoiceButtons.forEach(i => {i.addEventListener("click", event=> colourChosen(event));})
let playerColour, colourChoiceEventId;

function colourChosen(event)
{
  event = {targetId: undefined,target: event.target}
  // do not filter classList or childNodes entities without first converting to array. Also remember to parse every argument given to Array.from()
  if(event.target.tagName === "P"){
    event.targetId++;
    playerColour = Array.from(Array.from(event.target.parentNode.childNodes).filter(i=>i.nodeType == 1).filter(i=>i.tagName == "SPAN")[0].classList).filter(i => i == "black" || i == "white")[0]
    /*explanation: 
    we take the event: event
    select its target: event.target
    select its parent (we know p is child of button) *.target.parentNode)
    select its childList: *.parentNode.childNodes
    convert it to an array: Array.from(*.childNodes) 
    filter to get only element nodes: Array.from(*).filter(i=>i.nodeType == 1)
    filter to get the span element: *.filter(i=>i.tagName == "SPAN")
    select the only member of this array: *[0]
    select its classes: [0].classList
    convert it to an array: Array.from(*.classList) 
    filter to get the expected possible classes: Array.from(*).filter(i => i == "black" || i == "white")
    select the only member of this array: *[0]

    Of course many of this could have been done removing filters and using indexes by parsing through console. But I used a general approach in case I decide to change design or enter a greater project
    */
  } else if(event.target.tagName === "SPAN"){
    event.targetId++;
    playerColour = Array.from(event.target.classList).filter(i => i == "black" || i == "white")[0]
  } else{//button, really
    playerColour = Array.from(Array.from(event.target.childNodes).filter(i=>i.nodeType == 1).filter(i=>i.tagName == "SPAN")[0].classList).filter(i => i == "black" || i == "white")[0]
    //remember that JS does NOT have dynamic scope
  }
  modalAskRepertoire(event)
};

function modalAskRepertoire(event)
{
  let main;
  if(event.targetId)// removing everything from
  {
    main = event.target.parentNode.parentNode.parentNode;
    while(main.firstChild){main.removeChild(main.firstChild)};
    console.log(main);
  } else {
    main = event.target.parentNode.parentNode;
    while(main.firstChild){main.removeChild(main.firstChild)};
    console.log(main);
  };
  // main.appendChild
}
