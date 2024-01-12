// an example of a loop
let favouriteColours = ["green", "purple", "pink"]
//the i is used to control the loop. i = 0 means it starts at 0. we could stay at another number say 2. 
// i++ means increment by 1. you could go up in 2's instead for instance. Try i+2 and see what happens.it's a counter. whatever is in the curly brackets is what will loop.
for (let i = 0; i < favouriteColours.length; i++){
    console.log(favouriteColours[i])
}
// < is the condition. if it's less than.
// another point. i-- would make it go down. Try this.
// another example by Paul
let faveColour = ["Green", "Blue", "Red"]
 
for (let i = 0; i < faveColour.length; i++)
{
 
    console.log(faveColour[i]);
 
}

let faveDogBreeds = ["Border Collie", "Husky", "Springer Spaniel"]
 
for (let i = 0; i < faveDogBreeds.length; i++)
{
 
    console.log(faveDogBreeds[i]);
 
}

let multiplesOfTwo = [];

// to show multiples of 2 up to 20. Will start at 0 and finish at 18.
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        multiplesOfTwo.push(i)
    }
}

console.log(`numbers divisible by 2 are ${multiplesOfTwo}`)