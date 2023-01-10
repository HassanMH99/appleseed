const string = "The more you know, the more you know that you don't know";
let index = -1;
let word = "you";
let currentIndex = 0;
while ((currentIndex = string.indexOf(word, currentIndex)) !== -1) {
 index = currentIndex;
  currentIndex++;
}
console.log(index); 
