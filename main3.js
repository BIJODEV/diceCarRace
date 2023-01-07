let carPositions = {
    car1: 0,
    car2: 0,
    car3: 0,
    car4: 0,
    car5: 0,
    car6: 0
  };
let gameOver = false;

function moveCar() {
  const min = 1;
  const max = 7;
  const random = Math.floor(Math.random() * (max - min) + min);
  const change = document.getElementById("diceImg");
  if (gameOver) {
    return;  // exit the function early
  }
  change.setAttribute("src", `diceImg/dice${random}.jpeg`);
  if (
    carPositions.car1 !== 1200 ||
    carPositions.car2 !== 1200 ||
    carPositions.car3 !== 1200 ||
    carPositions.car4 !== 1200 ||
    carPositions.car5 !== 1200 ||
    carPositions.car6 !== 1200
  ) {
    const carId = `car${random}`;
    const car = document.getElementById(carId);
    car.style.position = "relative";
    car.style.setProperty("left", `${(carPositions[carId] += 200)}px`);
    if (carPositions[carId] === 1200) {
      console.log(`Player ${random} has won`);
      gameOver = true;
    }
  }
}