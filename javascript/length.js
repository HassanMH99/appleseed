function stringLengths(strings) {
    const lengths = [];
    for (let i = 0; i < strings.length; i++) {
        lengths.push(strings[i].length);
    }
    return lengths;
}
const input = ["boo", "doooo", "hoo","ro"];
const output = stringLengths(input);
console.log(output); // [3, 5,
