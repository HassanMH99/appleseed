
let populations = [150000000, 100000000, 70000000, 30000000];

function populationPercentages(populations) {
   
    let percentages = [];
    for (let i = 0; i < populations.length; i++) {
        let percentage = (populations[i] / 100000000) * 100;
        percentages.push(percentage);
    }
   
    return percentages;
}
let result = populationPercentages(populations);
console.log(result);




