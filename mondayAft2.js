// Previous challenges
// https://www.codewars.com/kata/55f73f66d160f1f1db000059
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

// First Challenge
// 
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:
// https://www.codewars.com/kata/55ecd718f46fba02e5000029
// a = 1
// b = 4
// --> [1, 2, 3, 4]

function showRange(a, b) {}
let a = 2
let b = 7
if (a > b) {

    console.log("a is smaller than b")
}
// To create the array 
let result = [];

for (let i = a; i <= b; i++) {
    result.push;
}
// To return the array
return result;
// To call the function
const resultArray = generateRange(a, b);
// To show the result
console.log(resultArray);

// Second Challenge
// https://www.codewars.com/kata/572059afc2f4612825000d8a


// Third Challenge
// https://www.codewars.com/kata/5aff237c578a14752d0035ae
// My grandfather always predicted how old people would get, 
// and right before he passed away he revealed his secret!
// In honor of my grandfather's memory we will write a function using his formula!
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function calculateFinalResult(ages) {
}
    // To initialize a variable to store the sum of the ages squared
    let age1 = 90
    let age2 = 101
    let age3 = 70
    let age4 = 91
    let age5 = 82
    let age6 = 57
    let age

    
    let sumOfSquaredAges = 0;

    // To go through each age in the list
    for (let i = 0; i < ages.length; i++) {
        // The addition assignment ( += ) operator performs addition 
        // (which is either numeric addition or string concatenation) on the two operands
        //  and assigns the result to the left operand.
        //To multiply each age by itself and add up the sums. * is multiply.
        sumOfSquaredAges += ages[i] * ages[i];
    }