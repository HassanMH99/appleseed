const mycountry ={
    country: "‘Finland",
    capital: "Helsinki’",
    language: "Finnish",
    population: 6,
    neighbours: ['jorden','turkey','lebanon'],
    describe(){
       console.log(`${this.country} has ${this.population} 
       million peaople,their mother tongue is ${this.language}, 
       ther have ${this.neighbours.length} neighbouring countries and a 
       capital called ${this.capital}.`);
    },
    checkIsland(){
      this.isIsland = this.neighbours.length===0 ?true :false;

    }
}

mycountry.describe();
mycountry.checkIsland();
console.log(mycountry);