function checkboom(number){
    console.log(`The number between 1 and ${number}`);
 
    for(i=1;i<=number;i++){
        if(i%7 ==0 && i==7){
            console.log("BOOM-BOOM");
        }else if(i%7 ==0){
            console.log("BOOM");
        }
        else{
            console.log(i);
        }

    }
   

}
checkboom(14);