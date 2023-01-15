const maxCount = 1000000;
console.time("My operation")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
//Perform the operation to be measured multiple times
}
console.timeEnd("My operation") // <---- Stop