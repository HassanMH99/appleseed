function getSumOfEven(arr){
    return arr[2] + arr[4] + arr[6] + arr[8] +
    arr[9];
    }
    console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

    //arr[10] cannot find becasue the indexes of array is array.lengh -1
    // now i fixed the range out of array
    // i put arr[9] instead of arr[10]