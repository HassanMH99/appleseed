const foods = ["falafel", "sabich", "hummus","pizza with extra pineapple"];

// 1
console.log(foods.sort().reverse());
// 2
console.log(foods.sort());
// 3
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple" ];
 foodsWithUpperCase.sort((a,b)=>{
    return a.toLowerCase().localeCompare(b.toLowerCase());
 }).reverse();
 console.log(foodsWithUpperCase);
// 4
 foodsWithUpperCase.sort((a,b)=>{
    return a.toLowerCase().localeCompare(b.toLowerCase());
 })
 console.log(foodsWithUpperCase);
 

 const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];
// 5
words.sort((a,b)=>{
    return b.length - a.length;
})
console.log(words);
