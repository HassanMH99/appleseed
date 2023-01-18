function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter ++ ;
    }
    } return counter ;
    }
  console.log(  countOccurrences ( "ini mini miny moe" , "n" ));
  //the problem ing line counter+1
  //debug method manual
  //the expression which  returns the sum but doesn't change the value of the counter.
  //fixed it counter++;