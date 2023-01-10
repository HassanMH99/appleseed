// 1
const people = ["Greg", "Mary", "Devon", "James"];
for(let i=1;i<people.length;i++){
console.log(people[i]);
}

// 2
people.splice(people.indexOf("Greg"), 1);
// 3
people.splice(people.indexOf("James"), 1);
// 4
people.unshift("Matt");
// 5
people.push("Mohamamd Hassan");
// 6
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
      break;
    }
  }
// 7  
const copy = people.slice(1, people.indexOf("Mary")).concat(people.slice(people.indexOf("Mary") + 1, people.length));
// 8

people.indexOf("Mary")

// 9
people.indexOf("Foo")

// 10
people = ["Greg", "Mary", "Devon", "James"];
people.splice(people.indexOf("Devon"), 1, "Elizabeth", "Artie");

// 11
const withBob = people.concat("Bob");
