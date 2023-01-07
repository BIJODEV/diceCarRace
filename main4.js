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
  const distance = screenWidth / 6;
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
    car.style.position = "relative";
    car.style.setProperty("left", `${(carPositions[carId] += distance)}px`);
    if (car.offsetLeft > screenWidth ) {
      console.log(`Player ${random} has won`);
      gameOver = true;
    }
  }
}