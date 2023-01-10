const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

let indexOfOrange = fruits.indexOf("Orange");
let indexOfLemon = fruits.indexOf("Lemon");

let newArray = fruits.slice(indexOfOrange, indexOfLemon+1);
console.log(newArray); 