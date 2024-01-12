let space1 = "x"
let space2 = "o"
let space3 = " "
let space4 = " "
let space5 = "x "
let space6 = "x "
let space7 = " "
let space8 = "o"
let space9 = " "

console.log("   |   |   ")
console.log(`${space1}  | ${space2} | ${space3}`)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(`${space4}  | ${space5}|  ${space6}` )
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(`${space7}  | ${space8} |  ${space9}` )
console.log("   |   |   ")


let raining = true
if(raining == true) {
    console.log("it's raining")
} else {
    console.log("it's not raining")
}

// i don't know what the three = signs mean below? Look into this. 
if(1 === "1") {
    console.log("same value, same data type")
} else {
    console.log("different value or different data type")

}

// a number example I made myself
let x = 7
let y = 9

if(x < y)
if(x < y == true) 
    console.log("x is smaller than y")  

// another example by Leon
    let age = 10
    if(age >= 17) {
        console.log("you can view an 18 rated movie")
    } else if (age >= 15) {
        console.log("you can watch a 15 rated movie")
    } else if (age >= 12) {
        console.log("you can watch a 12 rated movie")
    } else {
        console.log("you are too young")
    }
        
    let day = "Saturday"

    if(day === "Saturday" || day == "Sunday") {    
    console.log("it's the weekend")
    } else {
        console.log("weekday")
    }
    
    // below is another example by Leon
    let place = "london"
    let weather = "sunny"
     
    if(place == "manchester" && weather == "raining"){
        console.log("typical manchester weather")
    } else if (place == "manchester" && weather == "sunny"){
        console.log("sunny?!!! are you sure you are in manchester?")
    } else {
        console.log("why are you not in manchester")
    }
     
    
     