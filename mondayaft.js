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

