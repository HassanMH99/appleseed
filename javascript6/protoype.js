
Array.prototype.myFilter = function(callback) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.myFilter((num)=>{
    return num %2==0;
})
console.log(evenNumbers); 
//find
Array.prototype.myFind = function(callback) {
    for (var i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
  };

  var firstOddNumber = numbers.myFind(function(num) {
    return num % 2 !== 0;
  });
  console.log(firstOddNumber);

  //reduce
  Array.prototype.myReduce = function(callback, initialValue) {
    var accumulator = initialValue === undefined ? this[0] : initialValue;
    for (var i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  
  var sum = numbers.myReduce(function(acc, num) {
    return acc + num;
  }, 0);
  console.log(sum);