
main = (verb, noun) => {
    return verb + noun
}
console.log(main('happy', 'dog'))

// height 10, base 12 = 60
// create a function that will take two parameters (base, height) and calculate the area of a right
// angled triangle
// it needs to be divided by 2

function rightTriangleArea(base, height) {
  return (base * height) / 2;
}

let base = 10;
let height = 12;
let area = rightTriangleArea(base, height);
console.log(`The base of the triangle is ${base}, the height is ${height}, and the area is ${area}`);


  const take32 = (fahrenheit) => {
    return fahrenheit - 32;
  };
  
  const cel = (fahrenheit) => {
    return take32(fahrenheit) * 5 / 9;
  };
  
  console.log(cel(88));