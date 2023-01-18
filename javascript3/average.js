function calcAverage (arr){
    var sum=0 ;
    for ( var i = 0 ; i < arr.length; i ++ ){
    sum += arr [ i ];
    } return sum ;
    }
    console.log(calcAverage ([ 85 , 90 , 92 ]));

    //line 2 var sum this the problem
    //there is no initail value of sum 
    //when you define some value you should make at 
    //first value becasue when you define it the 
    //definistion gives the address 
    //in the memory and when we use it later without
    //taking a real value it should give us NaN
    