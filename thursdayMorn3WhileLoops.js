// a while loop will run while a condition is true
// example of a while loop
//I already know that ++ means an increment of 1
// you're a child will show 3 times here for each age still under 18. Then it will show "you're an adult" once 18 is reached.
let age = 15 
while (age < 18) {
    console.log("you're a child!")
    age++
}
console.log("you're an adult")

// another while loop example. 
// This will stop when a spade it hit. While it runs the cards are hit randomly until spade is hit.
let cards = ["diamond", "spade", "heart", "club"]
let currentCard = "club"
// in the line below the != means does not
while (currentCard != "spade") {
    console.log(currentCard)
    // the floor rounds
    currentCard = cards[Math.floor(Math.random()*4)]
}
console.log(currentCard)

// example by Paul of how to count down from 9 (in a loop?)
let myNumbers = [];
let indexValue = 0;
 
for (let i = 9; i>0; i--)
{
 
myNumbers[indexValue] = i
indexValue++;
 
}
console.log(myNumbers)