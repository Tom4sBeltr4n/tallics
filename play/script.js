let colourChoiceButtons = document.querySelectorAll(".modal--choose-colour")
colourChoiceButtons.forEach(i => {i.addEventListener("click", event=> colourChosen(event));})
let playerColour, colourChoiceEventId;
function colourChosen(event)
{
  //remember that JS does NOT have dynamic scope
  event = {targetId: 0,target: event.target}
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
  }
  modalAskRepertoire(event)
};
function addPieces(boardPieceAdder)
{
  // 
}
function modalAskRepertoire(event)
{//variable definitions
  function appender(elementToAppend)
  {
    elementToAppend.intendedChildren.forEach((i)=>{elementToAppend.htmlElement.append(i.htmlElement)});
    for(let i = 0; i < 8; i++)
    {
      elementToAppend.intendedChildren[i].intendedChildren.forEach((j)=>{elementToAppend.intendedChildren[i].htmlElement.append(j.htmlElement)})      
    };
  }
  let board = {};
  let container;
  class boardElement
  {
    constructor(e, i, n, d)
    {
      this.htmlElement = e;
      this.intendedChildren = i; 
      this.name = n;
      this.id = d;//board coordinates
    };
  };
  let pgnInput;
  let subtitleA;
  
  //tasks
  if(event.targetId)// removing everything from main--container
  {
    container = event.target.parentNode.parentNode;
    while(Array.from(container.childNodes)[2]){container.removeChild(Array.from(container.childNodes)[2])};
  } else {
    container = event.target.parentNode;
    while(Array.from(container.childNodes)[2]){container.removeChild(Array.from(container.childNodes)[2])};
  };
  document.querySelector(".modal--main").style.setProperty("padding-top", "10%");
  document.querySelector(".modal--container").style.setProperty("flex-direction","column");
  subtitleA = document.createElement("a"); //adding a link to the subtitle
  subtitleA.setAttribute("href", "https://en.wikipedia.org/wiki/Chess_notation");
  subtitleA.textContent = "Smith";
  document.querySelector(".modal--subtitle").style.setProperty("text-align", "justify");// Subtitle settings 
  document.querySelector(".modal--subtitle").style.setProperty("text-align", "justify");
  document.querySelector(".modal--subtitle").style.setProperty("font-size", "1.5rem");
  document.querySelector(".modal--subtitle").removeChild(Array.from(document.querySelector(".modal--subtitle").childNodes)[0])
  document.querySelector(".modal--subtitle").append('Please insert a PGN with your studied openings and variations, play them on the board with your mouse or by inserting them as ', subtitleA, ' notated moves');
  pgnInput = document.createElement("input"); // Adding an input to help the player enter their prep
  pgnInput.setAttribute("class","modal--pgn-input");pgnInput.setAttribute("type","text");pgnInput.setAttribute("placeholder","Insert PGN here");
  container.append(pgnInput);
  board = new boardElement(document.createElement("table"),[],"board","");
  board.htmlElement.setAttribute("class","modal--board");
  container.append(board.htmlElement);
  document.querySelector(".modal--board").style.setProperty("width", parseInt(getComputedStyle(document.querySelector(".modal--content")).width) * 0.62+"px");
  document.querySelector(".modal--board").style.setProperty("height", parseInt(getComputedStyle(document.querySelector(".modal--content")).width) * 0.62+"px");
  //a stands for abbreviation
  for(let i = 0; i < 8; i++){let a = board.intendedChildren; a.push(new boardElement(document.createElement("tr"),[], "row",i));a[board.intendedChildren.length - 1].htmlElement.setAttribute("class", "board--row")};//a stands for abbreviation
  for(let i = 0; i < 8; i++){for(let j = 0; j < 8; j++){let a = board.intendedChildren[i].intendedChildren; a.push(new boardElement(document.createElement("td"),null, "square", i.toString()+j.toString())); a[a.length -1].htmlElement.setAttribute("class", "board--square")}};
  console.log(board);
  appender(board);
}
