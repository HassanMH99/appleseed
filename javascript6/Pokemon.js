function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }

    var Pikachu = new Pokemon("Pikachu", "Electric", ["Thunderbolt", "Quick Attack", "Iron Tail"]);
    var Charizard = new Pokemon("Charizard", "Fire/Flying", ["Flamethrower", "Wing Attack", "Dragon Claw"]);
    var Blastoise = new Pokemon("Blastoise", "Water", ["Hydro Pump", "Skull Bash", "Flash Cannon"]); 
    var pokemons = [Pikachu, Charizard, Blastoise];
Pokemon.prototype.callPokemon=function(){
    console.log("I Choose you " + this.name);
}
Pokemon.prototype.Attack=function(numberAtt){
    console.log(this.name + " used " + this.attackList[numberAtt]);
}
Pikachu.callPokemon(); 
Pikachu.Attack(2 ); 
Charizard.callPokemon(); 
Charizard.Attack(1);
Blastoise.callPokemon()
Blastoise.Attack(1)