const storm = {
   superPower:"flying"
    }
    function printSuperPower() {
    console.log("my superpower is " +
    this.superPower);
    }
   printSuperPower.apply(storm) 
   printSuperPower.call(storm) 

   //then we can use the apply and call to calling the function by this ..
   