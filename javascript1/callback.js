function isString(str, callback) {
    if (typeof str === 'string') {
        callback(str);
    } else {
        console.log('The input is not a string');
    }
}

function firstWordUpperCase(str, callback) {
    let firstWord = str.split(' ')[0];
    let upperCased = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    let newStr = str.replace(firstWord, upperCased);
    callback(newStr);
}

function createDashes(str) {
    console.log(str.replace(/ /g, '-'));
}
firstWordUpperCase("this is a sentence", createDashes);

function myOwnFunction(num, callback) {
    let result = num * 2;
    callback(result);
}

myOwnFunction(5, (result) => { console.log(result)});
