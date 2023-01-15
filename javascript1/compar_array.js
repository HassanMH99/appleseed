const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];

function compare(food,food1){
let samefood =[];
for(let i=0;i<food.length;i++){
    for(let j=0;j<food1.length;j++){
        if(food[i]===food1[j]){
            samefood.push(food1[i])
        }
    }
}
    if (samefood.length > 0) {
        return samefood;
      } else {
        return false;
      }


}
// let same =[];
// same= compare(food,food1);
console.log(compare(food,food1));