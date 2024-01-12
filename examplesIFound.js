// runs the string 5 times
for (let step = 0; step < 5; step++) {
    console.log("Walking east one step");
}

// generating random numbers 

let x = Math.random() * 10;
console.log(x)

let z = Math.random() * 1000;
console.log(z)


// below is another way to find random numbers

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2

  console.log(getRandomInt(22));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1

// not sure what the 2 below do...
let u = Math.floor((Math.random() * 10) + 1);

let b = Math.floor((Math.random() * 100) + 1);