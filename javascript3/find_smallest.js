function findSmallest(a, b, c){
    if (a > b > c){
    return c;
    } else if (a > c > b) {
    return a;
    } else {
    return b;
    }
    }
    // findlSmalest(52,66, 2); this line bug
    findSmallest(52,66, 2);//this line true
    //its referencError Error
    //the problem in line findlSmalest(52,66, 2);
    //the bug is a type error ,we call the wrong fucntion to call it 
    //