console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let favoriteNumber = 4;

let numberGuess = prompt("Guess my favorite number!");

if (numberGuess<4){
    console.log("too low!")
} else if (numberGuess>4) {
    console.log("too high!")
} else {
    console.log("Congratulations!!!")
}

// Exercise 2
let favoriteAnimal = prompt("What's your favorite animal?")

switch(favoriteAnimal){
case "Penguin":
    console.log("Hey! Me too!");
    break;
case "penguin":
    console.log("Hey! Me too!")
    break;
case "Lion":
    console.log("Lions are alright, I guess.");
    break;
case "lion":
    console.log("Lions are alright, I guess");
    break;
case "Sloth":
    console.log("Sloths are so cute!!! But not as cute as penguins.");
    break;
case "sloth":
    console.log("Sloths are so cute!!! But not as cute as penguins.")
    break;
default:
    console.log("Oh yeah that's great but penguins are objectively better. Sorry, I don't make the rules.");
}