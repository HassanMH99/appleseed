// To take the max of array
const numbers =[5,2,4,6,8,9]
const max=numbers.reduce((acc,currentvalue)=>{
    return Math.max(acc,currentvalue);
})
console.log(max);
// To make a sum Even numbers
const numbers2 = [1,2,3,4,5,6,7,8];
const sumeven = numbers2.reduce((acc,value)=>{
   
    if(value%2===0){
        return acc+=value;
    }
    return acc;
},0)
console.log(sumeven);


// To calculate the average
const numbers3 = [1, 4, 2, 5, 9, 7, 8];
const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const avg = sum / numbers.length;
console.log(avg);
