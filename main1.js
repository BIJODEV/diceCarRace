let carx1, carx2, carx3, carx4, carx5, carx6;
[carx1, carx2, carx3, carx4, carx5, carx6] = Array(6).fill(200);

function changeImage() {
  const min = 1;
  const max = 7;
  const random = Math.floor(Math.random() * (max - min) + min);
  const change = document.getElementById("diceImg");
  change.setAttribute("src", `diceImg/dice${random}.jpeg`);
//   if (
//     carx1 !== 1400 &&
//     carx2 !== 1400 &&
//     carx3 !== 1400 &&
//     carx4 !== 1400 &&
//     carx5 !== 1400 &&
//     carx6 !== 1400
//   ) {
    const carId = `car${random}`;
    const car = document.getElementById(carId);
    car.style.position = "relative";
    car.style.left = `${(eval(`carx${random}`) += 200)}px`;
    if (eval(`carx${random}`) === 1400) {
      console.log(`Player ${random} has won`);
    }
  }
// }
