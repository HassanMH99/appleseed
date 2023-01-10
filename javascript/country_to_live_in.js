function countryToLiveIn(language, isIsland, population, country) {
    if(language === "English" && !isIsland && population < 50000000) {
        console.log("You should live in " + country + ".");
    } else {
        console.log(country + " does not meet your criteria.");
    }
}
countryToLiveIn("English",false, 49000000, "Finland");
countryToLiveIn("Arabic",false, 49000000, "palestine");
