let carPositions = {
    car1: 0,
    car2: 0,
    car3: 0,
    car4: 0,
    car5: 0,
    car6: 0
  };
let gameOver = false;
let counter = 0;
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startGame);
startBtn.style.padding= "5px 5px";


function startGame(){
    const messageContainer = document.createElement("div");
    messageContainer.style.position = "absolute";
    messageContainer.style.top = "50%";
    messageContainer.style.left = "50%";
    messageContainer.style.transform = "translate(-50%, -50%)";
    messageContainer.style.fontSize = "70px";
    messageContainer.style.fontWeight = "bold";
    messageContainer.style.color = "white";
    document.body.appendChild(messageContainer);
  
    for(let i=1;i<=5;i++){
      setTimeout(()=>{
        messageContainer.textContent = i===4? "GO!" : i;
        if(i === 5) {
          setTimeout(() => setInterval(moveCar, 1500), 300);
          messageContainer.style.display = "none";
        }
      }, i*1000);
    }
  }
  
  

function moveCar() {
  const min = 1;
  const max = 7;
  const random = Math.floor(Math.random() * (max - min) + min);
  const change = document.getElementById("diceImg");
  const screenWidth = window.innerWidth;
  const distance = screenWidth / 7;
  if (gameOver) {
    return;  // exit the function early
  }
  change.setAttribute("src", `diceImg/dice${random}.jpeg`);
  if (
    carPositions.car1 !== screenWidth &&
    carPositions.car2 !== screenWidth &&
    carPositions.car3 !== screenWidth &&
    carPositions.car4 !== screenWidth &&
    carPositions.car5 !== screenWidth &&
    carPositions.car6 !== screenWidth
  ) {
    const carId = `car${random}`;
    const car = document.getElementById(carId);
    // const carWidth = car.offsetWidth;
    const raceboard = document.getElementById('raceboard');
    const raceboardWidth = raceboard.offsetWidth;
    car.style.position = "relative";
    car.style.setProperty("left", `${(carPositions[carId] += distance)}px`);
    // if (car.offsetLeft > screenWidth )
    if (car.offsetLeft >= raceboardWidth)  {
      gameOver = true;
      change.remove();

    const resultElement = document.createElement("div");
    resultElement.textContent = `Player ${random} has won`;
    resultElement.style.position = "absolute";
    resultElement.style.top = "40%";
    resultElement.style.left = "50%";
    resultElement.style.transform = "translate(-50%, -50%)";
    resultElement.style.fontSize = "70px";
    resultElement.style.fontWeight = "bold";
    resultElement.style.color = "white";
    document.body.appendChild(resultElement); 

    // dim the background image
     document.body.style.opacity = "0.5";  // set the opacity to 0.5

     const refreshButton = document.createElement("button");
     refreshButton.textContent = "Refresh";
     refreshButton.style.position = "absolute";
     refreshButton.style.top = "5%";
     refreshButton.style.left = "5%";
     refreshButton.style.transform = "translate(-50%, -50%)";
     refreshButton.style.fontSize = "20px";
     refreshButton.style.padding = "10px 20px";
     refreshButton.style.color = "white";
     refreshButton.style.background = "purple"
     refreshButton.style.cursor = "pointer";
     
     refreshButton.addEventListener("click", function() {
       window.location.reload();  // reload the page
     });
     
     document.body.appendChild(refreshButton);
    }
  
    
  }
}
