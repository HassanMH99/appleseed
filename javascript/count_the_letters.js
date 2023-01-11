const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
function taking(array){
  let lettercount ={};
  for(const word of array){
    for(const letter of word.toLowerCase()){
        if(lettercount[letter]){
            lettercount[letter]++;
        }
        else{
            lettercount[letter] =1;
        }
    }
  }
  return lettercount;
}
const lettercount = taking(array);
console.log(lettercount);
let maxLetter = null;
let maxCount = 0;
for(let letter in lettercount) {
    if(lettercount[letter] > maxCount) {
        maxLetter = letter;
        maxCount = lettercount[letter];
    }
}
console.log(`Letter with the most occurrences: ${maxLetter} with ${maxCount} occurrences`);