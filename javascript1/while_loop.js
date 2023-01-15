function stringLengths(strings) {
    const lengths = [];
   
    let i=0;
    while(i<strings.length){
        lengths.push(strings[i].length);
        i++;
    }
    return lengths;
}
const input = ["boo", "doooo", "hoo","ro"];
const output = stringLengths(input);
console.log(output); // [3, 5,
