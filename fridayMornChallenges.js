// Challenges. Must be in a function

// Challenge 1.	Create a program that stores what you eat today for ‘breakfast:’, ‘lunch:’ and ‘dinner:’. Return the string. Eg (“breakfast:pancakes, lunch:blt, dinner:steakandchips”). 
// Don’t forget the colons. 

function todayIAte (breakfast, lunch, dinner) {
    return `breakfast:${breakfast}, lunch:${lunch}, dinner:${dinner}`;}
let breakfast = "toast and jam";
let lunch = "a chicken sandwich";
let dinner = "a stir fry";
let todaysMeals = todayIAte (breakfast, lunch, dinner);
console.log(todaysMeals);

// Challenge 2. fizzBuzz
// typeof can identify if what is being inputted is a number

function fizzBuzz(num) {
   
    if (typeof num === 'string' || num <= 0) {
      return 'must be a positive number';
    }

    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizz buzz';
    }
    
    if (num % 3 === 0) {
      return 'fizz';
    }
  
    if (num % 5 === 0) {
      return 'buzz';
    }
  
    return num;
  }

  console.log(fizzBuzz(30));


// Challenge 3
// 3. Pass in 2 parameters called num1 and num2. 
// Create an if statement that checks if the result of the sum is even, if it is return the number,
//  otherwise return the numbers multiplied together.
//  If the parameters are not numbers return the error message 'make sure you enter 2 numbers'.

function process2Nums(num1, num2) {
    // typeof can be used to check that both of the parameters are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Make sure you enter 2 numbers';
    }
    const sum = num1 + num2;
    if (sum % 2 === 0) {
        return sum;
    } else {
        
        return num1 * num2;
    }
}

const result1 = process2Nums(9,12);
const result2= process2Nums(5,22);
const result3= process2Nums(8,90);
const result4= process2Nums("Sasha", 12)

console.log(result1, result2, result3, result4);


// Challenge 4 
// Generate 6 random numbers between 1 and 50 and return them in an array. 

function generateRandomNumbers() {
    const ranNums = [];
  
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      ranNums.push(randomNumber);
    }
  
    return ranNums;
  }
  
  const resultArray = generateRandomNumbers();
  console.log(resultArray);

// Challenge 5 
// With a function, create an array counting from 9 to 0. 

function makeMyArray() {
    let result = [];
    for (let i = 9; i >= 0; i--) {
      result.push(i);
    }
    return result;
  }
  
  let arrayFrom9 = makeMyArray();
  
  console.log(arrayFrom9);


