function getSum(arr1, arr2){
    var sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum;
    }
   
    console.log(getSum([1,2,3],[5,66,23]));
   

    // at the function getsum at first there is no return value sum to show the result
    // and the sum is const cant be outside the brackits its called block scope
    //to pass it oustide the bracket you need to define sum to var
    //and the also fixed all bugs