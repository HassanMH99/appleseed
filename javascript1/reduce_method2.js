const obj =[{name:'mohmamad',id:5},{
    name: 'hashem',id:4
}]

function extractOnlyValue(arr, key) {
    return arr.reduce((acc, curr) => {
      acc.push(curr[key]);
      return acc;
    }, []);
  }
let logs=extractOnlyValue(obj,'name');
console.log(logs);

// to count the vowels
function countOnlyVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').reduce((acc, curr) => {
      if (vowels.indexOf(curr) !== -1) {
        if (acc[curr]) {
          acc[curr] += 1;
        } else {
          acc[curr] = 1;
        }
      }
      return acc;
    }, {});
  }
console.log(countOnlyVowels("me my ME aeio "));  

// To add new data in object using reduce method
function addKeyAndValue(arr, key, value) {
    return arr.reduce((acc, current) => {
      current[key] = value;
      acc.push(current);
      return acc;
    }, []);
  }
  const data = [
    { name: 'mohammad', age: 23 },
    { name: 'hashem', age: 23 },
    { name: 'yishai', age: 30 },
   
];
const newData = addKeyAndValue(data, 'city', 'Jerusalem');
console.log(newData);