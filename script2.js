let images = document.querySelectorAll('.photo');
let isLocked = []; // initialize an empty array to keep track of the locked state of each image
let winnerName = null;
let dataTextValues = {};
const defaultNames = ["blue", "navyblue", "green", "red", "pink", "white"];

for (let i = 0; i < images.length; i++) {
    let image = images[i];
    let id = image.firstElementChild.id

    // set the default name
    let defaultName = defaultNames[i];
    dataTextValues[id] = defaultName;
    image.setAttribute('data-text', defaultName);

    // add an event listener to each image
    image.addEventListener('click', function() {
      if (!isLocked[i]) { // check if the image is not locked
        let text = prompt('Enter the text:');
        if (text !== null) {
          let dataText = this.getAttribute('data-text');
          dataText = text; // update the value of the data-text attribute

          this.setAttribute('data-text', dataText);
          dataTextValues[id] = dataText; // use the dynamically created key to set the value
          isLocked[i] = true;
          
                  // remove the event listener from the image
          image.removeEventListener('click', arguments.callee);

          // set the cursor style to default to indicate that the image is no longer hoverable
          image.style.cursor = 'default';
          
          console.log(dataTextValues);
        }
      }
    });
}

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
        
        // find the winner's image
          winnerName = dataTextValues[carId];
          console.log(carId)
          
          const resultElement = document.createElement("div");
          resultElement.textContent = `Player ${winnerName} has won`;
          resultElement.style.position = "absolute";
          resultElement.style.top = "40%";
          resultElement.style.left = "50%";
          resultElement.style.transform = "translate(-50%, -50%)";
          resultElement.style.fontSize = "70px";
          resultElement.style.fontWeight = "bold";
          resultElement.style.color = "white";
          document.body.appendChild(resultElement); 

          // dim the background image
          document.body.style.opacity = "0.5"; // set the opacity to 0.5
      }
    }
}