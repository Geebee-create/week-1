const person = {
    firstName: "Nikki",
    lastName: "Beaumont",
    age: 30,
    eyeColor: "pale blue"
  };

  console.log(person);
 
  const person2 = {
    firstName: "Milena",
    lastName: "Balac",
    age: 31,
    id: 1975,
    eyes: "brown",
    fullName: function() {
        return this.firstName + " " + this.lastName + " has " + this.eyes + " eyes";
    }
};

console.log(person2.fullName());

let cafe = {
    // key value pairs. keys can also be referred to as properties here.
    name : "Bridge Cafe",
    seatingCapacity : 26,


}

const person3 = {
    firstName: "Gina",
    age: 31,
    faveSongs: [
        "Friday I'm in Love - The Cure",
        "Little Wing - Jimi Hendrix",
        "Wet Sand - Chili Peppers",
        "Cinnamon Girl - Lana Del Rey",
        "Would - Alice in Chains"


    ],
    likesFootball: true,
    greeting() {
        return `Hi, my name is ${this.firstName}`;
    },
    doesLikeFootball() {
        if (this.likesFootball) {
            return "Gina likes football";
        }
    }
};

console.log(person3.greeting());

//   there is a slide expanding on this one below. 
  let offer = 'none'
  let time = 1200;
  let caff = {
    // key value pairs. keys can also be referred to as properties here.
    name : "Bridge Cafe",
    seatingCapacity : 26,
  }


  let alarmSetting = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
};

// Replace "Saturday" with the actual day obtained dynamically (e.g., using a Date object)
let day = "Saturday";

let alarm;

if (day === "Saturday" || day === "Sunday") {
    alarm = alarmSetting.weekendAlarm;
} else {
    alarm = alarmSetting.weekdayAlarm;
}

console.log(`For ${day}, set alarm to: ${alarm}`);

const myPet = {
    petName: "Sasha",
    typeOfPet: "Dog",
    age: 12,
    breed: "Blue Merle Border Collie",
    colour: "silver. black and white",
    colourOfEyes: "blue and brown",
    personalityType: "naughty",

    eat() {
        return `${this.petName} is eating.`;
    },

    drink() {
        return `${this.petName} is drinking.`;
    }
};

console.log(myPet.eat());


const coffeeShop = {
    name: "Starbucks",
    branch: "Islington High Street",
    drinksWithPrices: [
        { name: "Latte", price: 2.40 },
        { name: "Cappuccino", price: 2.25 },
        { name: "Mocha", price: 3.00 },
        { name: "Americano", price: 2.70 },
    ],
    foodWithPrices: [
        { name: "Chicken Caesar Wrap", price: 5.50 },
        { name: "Cheese Toastie", price: 4.20 },
        { name: "Chocolate Brownie", price: 2.80 },
    ],
// The method, drinksOrdered, calculates and returns a string summarizing the drinks order. 
// The reduce function sums up the total cost of drinks.
// map creates an array of formatted strings for each drink.
// join(", ") joins the formatted drink strings into a list with commas.
// The last string includes the coffee shop name, the formatted list of drinks with prices, and the total of the cost.
    drinksOrdered() {
        let totalCost = this.drinksWithPrices.reduce((total, drink) => total + drink.price, 0);
        return `${this.name} Drinks Order: ${this.drinksWithPrices.map(drink => `${drink.name} £${drink.price.toFixed(2)}`).join(", ")} Total cost: £${totalCost.toFixed(2)}`;
    },

    foodOrdered() {
        let totalCost = this.foodWithPrices.reduce((total, food) => total + food.price, 0);
        return `${this.name} Food Order: ${this.foodWithPrices.map(food => `${food.name} £${food.price.toFixed(2)}`).join(", ")} Total cost: £${totalCost.toFixed(2)}`;
    }
};

console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());

const person4 = {
    firstName: "Melanie",
    age: 30,
    eyes: "brown",
    nationality: "French and Vietnamese",
    faveHobbies: [
        "Horse Riding",
        "Climbing",
        "Baking",
        "Singing",
        "Buying shoes",
        "Learning languages"
    ],
    herEyes: function() {
        return `${this.firstName} has ${this.eyes} eyes.`;
    },
herNationality: function() {
    return `${this.firstName} is ${this.nationality}.`;
}
};
console.log(person4.herEyes());
console.log(person4.herNationality());

