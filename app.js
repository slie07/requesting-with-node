var movie = require("./movie.js");
var threeFavoriteMovies = ['Forrest Gump', 'Fight Club', 'A Clockwork Orange'];
threeFavoriteMovies.forEach(function(film){
  movie.get(film);
});
