function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

let integers = [3,4,4,3,6,3];
let uniqueIntegers = removeDuplicates(integers);
console.log(uniqueIntegers); 