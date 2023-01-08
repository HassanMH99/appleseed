function tellFortune(jobTitle,location,partnerName,numberOfChildren){
    return `You Will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children`

}
const info =tellFortune('programmer','New York','Rana',2);
console.log(info)