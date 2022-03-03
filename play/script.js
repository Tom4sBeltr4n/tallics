let colourChoiceButtons = document.querySelectorAll(".modal--choose-colour")
colourChoiceButtons.forEach(i => {i.addEventListener("click", event=> colourChosen(event));})
let playerColour, colourChoiceEventId;
function colourChosen(event)
{
  //remember that JS does NOT have dynamic scope
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
  }
  modalAskRepertoire(event)
};
function addPieces(boardPieceAdder)
{
  // for(i in boardPieceAdder)
  // {
  //   for(j in boardPieceAdder[i])
  //   {
  //     //  board[i].square
  //   }
  // }
}
function modalAskRepertoire(event)
{//variable definitions
  function appender(elementToAppend)
  {
    container.append(elementToAppend.htmlElement);
    elementToAppend.intendedChildren.forEach((i)=>{elementToAppend.htmlElement.append(i.htmlElement)})
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
  
  //tasks
  if(event.targetId)// removing everything from main--container
  {
    container = event.target.parentNode.parentNode.parentNode.parentNode;
    console.log(container, event.target);
    while(Array.from(container.childNodes)[2]){container.removeChild(Array.from(container.childNodes)[2])};
  } else {
    container = event.target.parentNode;
    console.log(container, event.target);
    while(Array.from(container.childNodes)[2]){container.removeChild(Array.from(container.childNodes)[2])};
  };
  document.querySelector(".modal--main").style.setProperty("padding-top", "10%");
  document.querySelector(".modal--container").style.setProperty("flex-direction","column");
  document.querySelector(".modal--subtitle").style.setProperty("text-align", "justify");// Subtitle settings 
  document.querySelector(".modal--subtitle").style.setProperty("text-align", "justify");
  document.querySelector(".modal--subtitle").style.setProperty("font-size", "1.5rem");
  document.querySelector(".modal--subtitle").textContent = "Please insert a PGN with your studied openings and variations";
  pgnInput = document.createElement("input"); // Adding an input to help the player enter their prep
  pgnInput.setAttribute("class","modal--pgn-input");pgnInput.setAttribute("type","text");pgnInput.setAttribute("placeholder","Insert PGN here");
  container.append(pgnInput);
  board = new boardElement(document.createElement("table"),[],"board","");  
  board.htmlElement.setAttribute("class","modal--board");
  //a stands for abbreviation
  for(let i = 0; i < 8; i++){let a = board.intendedChildren; a.push(new boardElement(document.createElement("tr"),[], "row",i));a[board.intendedChildren.length - 1].htmlElement.setAttribute("class", "board--row")};//a stands for abbreviation
  for(let i = 0; i < 8; i++){for(let j = 0; j < 8; j++){let a = board.intendedChildren[i].intendedChildren; a.push(new boardElement(document.createElement("td"),null, "square", j)); a[a.length -1].htmlElement.setAttribute("class", "board--square")}};
  console.log(board);
  appender(board);
  // container.append(board);
  // for(let i = 0; i < 8; i++){rowAppender.push(document.createElement("tr")); rowAppender[i].setAttribute("class", "board--row");board.append(rowAppender[i])};
  // for(i in rowAppender)
  // {
    // for(let j = 0; j < 8; j++)
    // {
      // squaresInRowAppender[j] = [];
      // squaresInRowAppender[j].push(document.createElement("td"));
      // squaresInRowAppender[j][squaresInRowAppender[j].length-1].setAttribute("class", "board--square");
      // rowAppender[i].append(squaresInRowAppender[j][squaresInRowAppender[j].length-1])
    // }
  // };
  // rowArray.push(new rowObject(rowAppender[0],square[0]));
  // addPieces(rowArray);
}
