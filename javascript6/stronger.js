const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength.call(hero) < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
console.log(whoIsStronger(hero.getStrength));
//you need to change the getStrength() < myStrength
//to getStrength.call(hero) < myStrength