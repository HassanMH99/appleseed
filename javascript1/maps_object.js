let obj1 = {name:"Mohammad Hassan"}
let obj2 = {name:"Hashem Abuten"}
let obj3 = {name:"Yihya"}

let map = new Map();
map.set(obj1,1);
map.set(obj2,2);
map.set(obj3,3);

for(let[key,value] of map){
    console.log(`Name: ${key.name}, ID: ${value++}`);
}