function makeAllCaps(words){
    return new Promise((res,rej)=>{
        if(words.every(word=>typeof word === "string")){
            res(words.map(word=>word.toUpperCase()))
        }else{
            rej('Array Not Contains to string')
        }
    })

}
function sortWords(words){
    return new Promise(res=>{
        res(words.sort());
    })
}

const words = ['mohammad','hassan','tommy']
const nonwords =['mohammad',123,'hassan']

makeAllCaps(words).
then(words=>sortWords(words)).
then(sorted=>console.log(sorted)).
catch(error=>console.log(error))
makeAllCaps(nonwords).
then(words=>sortWords(words)).
then(sorted=>console.log(sorted)).
catch(error=>console.log(error))