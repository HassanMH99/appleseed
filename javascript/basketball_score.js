let johnteam =[100,120,103];
let miketeam = [116,94,123];
let maryteam =[97,134,105];
function calcualate(scores){
    let sum =0;
    for(let i=0;i<scores.length;i++){
        sum+=scores[i];
    }
    return sum /scores.length;
}
let johnaverage =calcualate(johnteam);
let mikeaverage = calcualate(miketeam);
let maryaverage =calcualate(maryteam);
if(johnaverage > mikeaverage && johnaverage > maryaverage){
    console.log("The John Team Win");
}else if(johnaverage<mikeaverage && mikeaverage>maryaverage){
    console.log("The Mike Team Win");

}else if(maryaverage>johnaverage && maryaverage>mikeaverage){

}

else{
    console.log("The 3 Teams Draw");
}