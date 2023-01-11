const object = {
    name:"mohammad",
    age: 23,
    study: "Computer Engineer",
    work: "FullStack"
}
function swap(obj){
    let SwapObjcet ={};
    for(let swap in obj) {
        SwapObjcet[obj[swap]] = swap;
    }   
return SwapObjcet;
}

console.log(object);
const swapped = swap(object);
console.log(swapped);