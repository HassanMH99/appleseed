
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f14cfe23')
  .then(response => response.json())
  .then(movieData => {
    console.log("Movie Poster:", movieData.Poster);
    console.log("Movie Title:", movieData.Title);
    console.log("Genre:", movieData.Genre);
    console.log("Year:", movieData.Year);
    console.log("Plot:", movieData.Plot);
    console.log("Director:", movieData.Director);
    console.log("Actors:", movieData.Actors);
    console.log("IMDB Rating:", movieData.Ratings[0].Value);
    console.log("Rotten Tomatoes Rating:", movieData.Ratings[1].Value);
    console.log("Metacritic Rating:", movieData.Ratings[2].Value);
  })
  .catch(error => console.error(error));
  
