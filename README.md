# diceCarRace

#This code defines an object carPositions that keeps track of the positions of six cars in a race. The moveCar() function is responsible for moving the #cars on the screen. It uses the Math.random() function to randomly select a car to move and the setAttribute() method to update the image of a dice #according to the random number generated.

#The function checks if all cars have reached the end of the race by comparing their positions to the width of the screen. If none of the cars have reached #the end yet, the function selects a random car to move and updates its position by a fixed distance. The function also checks if the selected car has #reached the end of the race by comparing its offsetLeft position to the width of the raceboard.

#If the car has reached the end of the race, the code sets the gameOver variable to true, remove the diceImg and the code creates a "Player X has won" #message and a refresh button on the screen. The refresh button allows the user to reload the page and start a new game.
