// 1

function doubleValues(array){
let newarr =[]
    array.forEach(double => {
        newarr.push(double*2)
        
    });
    return newarr;
}
const array =[1,2,3,4,5]
console.log(doubleValues(array));
// 2
function onlyEvenValues(array){
    return array.filter((val)=>{
        return val % 2 ===0;
    })
    }
    console.log(onlyEvenValues(array));

//3 

function showFirstAndLast(arr){
    let newarr =[]
    if(typeof arr[0]==="string") newarr.push(arr[0]);
    if(typeof arr[arr.length -1]==="string") newarr.push(arr[arr.length-1]);
    return newarr

}
console.log(showFirstAndLast(["hello",1 , "world", "8"])) 
// 4
function vowelCount(str) {
    let vowels = "aeiou";
    let lowerStr = str.toLowerCase();
    let chars = lowerStr.split('');
    return chars.reduce((acc, char) => {
      if (vowels.indexOf(char) !== -1) {
          acc[char] = acc[char] + 1 || 1;
      }
      return acc;
    }, {})
  }
  console.log(vowelCount("hello world")) // { e: 2, o: 2 }
  
// 5
  function capitalize(String){
    let captilize=String.toUpperCase()
    
    return captilize
  }
  console.log(capitalize("mohammad"));
// 6
function shiftLetters(str) {
    let chars = str.split('');
    chars.forEach((char, index) => {
        let code = char.charCodeAt();
        if (code >= 97 && code <= 122) {
            code += 1;
            if (code > 122) {
                code = 97;
            }
            chars[index] = String.fromCharCode(code);
        }
    });
    return chars.join('');
}
console.log(shiftLetters("hello world")); // "ifmmp xpsme"
// 7
function swapCase(str) {
    let words = str.split(' ');
    words.forEach((word, index) => {
        if (index % 2 === 0) {
            words[index] = word.toUpperCase();
        } else {
            words[index] = word.toLowerCase();
        }
    });
    return words.join(' ');
}
console.log(swapCase("hello world")); // "HELLO world"
