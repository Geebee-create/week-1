let sunny = true
let warm = true
if(sunny && warm == false) {
    console.log("it's a sunny and warm day")
} else {
    console.log("it isn't sunny and warm today")
}

// arrays. arrays contain data.
// the index starts at 0. So bob is 0. sarah is 1 and steve is 2.
let coffeeOrder = [
    "bob = latte",
    "sarah = americano",
    "steve = flat white"
]

// to change one of the elements
coffeeOrder [1] = "laura = orange juice"

console.log(coffeeOrder)

// to show only the last element
console.log(coffeeOrder[1])

// seeing the property of an array. an example is .length
console.log(coffeeOrder.length)

// when adding a push there always needs to be a console log after for it to run
coffeeOrder.push("Hannah - black coffee")
console.log(coffeeOrder)

let favouriteArtists = [
    "Gina = Dali",
    "Grace = Klimt",
    "Kate = Picasso"
]
console.log(favouriteArtists)

// pop removes the last element from an array
favouriteArtists.pop();
console.log(favouriteArtists)

// unshift adds new elements to the beginning of the array
favouriteArtists.unshift("Jenny = Matisse","Simon = Warhol");
console.log(favouriteArtists)

// shift removes the first element from an array
favouriteArtists.shift();
console.log(favouriteArtists)

// slice. i havent done this one successfully yet
favouriteArtists.slice(-2);
console.log(favouriteArtists)

const femaleSingers = [
    "Lana Del Rey",
    "Kate Bush",
    "Stevie Nicks"
]
console.log(femaleSingers)

// i need to work on slices more and have a go at splice...
femaleSingers.slice(1,2);
console.log(femaleSingers)

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);
console.log(fruits)

// below are examples of splices
// the first example adds two elements at position 2. 
const flavours = ["Banana", "Orange", "Apple", "Mango"];
flavours.splice(2, 0, "Lemon", "Kiwi");
console.log(flavours)

// this second example removes 2 elements at position 2.
const colours = ["Blue", "Green", "Orange", "Yellow", "Aqua"];
colours.splice(2, 2);
console.log(colours)

