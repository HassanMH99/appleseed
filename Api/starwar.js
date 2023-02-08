const characters = [];

for (let i = 1; i <= 10; i++) {
  fetch(`https://swapi.dev/api/people/${i}/`)
    .then(response => response.json())
    .then(characterData => {
      fetch(characterData.homeworld)
        .then(response => response.json())
        .then(planetData => {
          const character = {
            name: characterData.name,
            height: characterData.height,
            hairColor: characterData.hair_color,
            planet: planetData.name,
            population: planetData.population,
          };
          characters.push(character);
          if (characters.length === 10) {
            console.log(characters);
          }
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
}




