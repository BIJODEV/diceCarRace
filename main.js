let carx1, carx2, carx3, carx4, carx5, carx6;
[carx1, carx2, carx3, carx4, carx5, carx6] = Array(6).fill(200);
    function changeImage(){
        let min=1;
        let max=7;
        let random = Math.floor((Math.random() * (max-min) + min ));    
        // return random;
        let change = document.getElementById("diceImg")
        change.setAttribute('src',("diceImg/dice" + random + ".jpeg"))
        if ((carx1 !== 1400) && (carx2 !== 1400) && (carx3 !== 1400) && (carx4 !== 1400) && (carx5 !== 1400) && (carx6 !== 1400)) {
            if (random == 1) {
                let car1 = document.getElementById("car1")
                car1.style.position = "relative";
                car1.style.left = carx1 + "px";
                carx1 += 200;
                if (carx1 === 1400){
                    console.log("Player 1 has won")
                }
            }
            else if(random == 2){
                let car2 = document.getElementById("car2")
                car2.style.position = "relative";
                car2.style.left = carx2 + "px";
                carx2 += 200;
                console.log(carx2)
                if (carx2 === 1400){
                    console.log("Player 2 has won")
                }
            }
            else if(random == 3){
                let car3 = document.getElementById("car3")
                car3.style.position = "relative";
                car3.style.left = carx3 + "px";
                carx3 += 200;
                if (carx3 === 1400){
                    console.log("Player 3 has won")
                }
            }
            else if(random == 4){
                let car4 = document.getElementById("car4")
                car4.style.position = "relative";
                car4.style.left = carx4 +"px";
                carx4 += 200;
                if (carx4 === 1400){
                    console.log("Player 4 has won")
                }
            }
            else if(random == 5){
                let car5 = document.getElementById("car5")
                car5.style.position = "relative";
                car5.style.left = carx5 + "px"
                carx5 += 200;
                if (carx5 === 1400){
                    console.log("Player 5 has won")
                }
            } 
            else if(random == 6){
                let car6 = document.getElementById("car6")
                car6.style.position = "relative";
                car6.style.left = carx6 + "px"
                carx6 +=200;
                if (carx6 === 1400){
                    console.log("Player 6 has won")
                }
            }
        }
    }