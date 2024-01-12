// Challenge 1
// Create an array that lists your favourite films, up to 5 elements.
// Add 2 more using a method.
// Use a loop to cycle through the array and console log each item

let faveFilms = [
    "The Royal Tenenbaums",
    "Singin' in the Rain",
    "Some Like It Hot"
]

console.log(faveFilms)

faveFilms.unshift("Death Becomes Her","Rebecca");
console.log(faveFilms)

for (let i = 0; i < faveFilms.length; i++){
    console.log(faveFilms[i])
}

// Challenge 2
// Generate 6 random numbers between 1-50 and log them to the console

// a way I found online of generating one random number from 0 to 50
// I don't know how to make it generate 6 random numbers though

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  console.log(getRandomInt(51));

//   Here is how Paul did challenge 2 but with 30 instead of 50. 
// Shows random numbers from 0 to 29.
let myNums = [] ;

for (let i = 0; i<6; i++) {
    myNums[i] = Math.floor(Math.random()*30);
    console.log(myNums[i])
}

// example of my own with 6 random numbers. Generates 6 random numbers from 0 to 50 (doesn't include 51)
let sixNums = [] ;

for (let i = 0; i<6; i++) {
    sixNums[i] = Math.floor(Math.random()*51);
    console.log(sixNums[i])
}

// Another example.
// Generates 10 numbers from 0 to 2. Doesn't include 3.

let tenNums = [] ;

for (let i = 0; i<10; i++) {
    tenNums[i] = Math.floor(Math.random()*3);
    console.log(tenNums[i])
}

// Challenge 3
// If we can create a loop to put 0-9 on the screen, how can we count from 9-0? 
// Create a program that does this.

// Paul showed us how to do this with the example below.

let myNumbers = [];
let indexValue = 0;
 
for (let i = 9; i>0; i--)
{
 
myNumbers[indexValue] = i
indexValue++;
 
}
console.log(myNumbers)


 
// Challenge 4
// Displays 4 films stored in an array.
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is Ghostbusters.
// If it is, log “Yay it’s Ghostbusters”. If it isn’t log “Boo! we want Ghostbusters!

let theMovies = ["Movie 1 = Jumanji", "Move 2 = Titanic", "Movie 3 = Mean Girls", "Movie 4 = American Pyscho"]

let Jumanji = true
if(Jumanji == true) {
    console.log("Movie 3 is Jumanji")
} else {
    console.log("Movie 3 isn't Jumanji")
}


// Challenge 5
// Generate a random number between 1 and 30 six times.
// For each random number generated, check if this number of divisible by 7 or not.
// Log out a message to the console if it is divisible by 7 or not.

// Challenge 6
// Imagine you’re a programmer for a social media platform! 
// You have been tasked with building a prototype for a mutual followers program.
// Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
//  In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
// Using a nested loop iterate over both arrays and console.log out the matching follower