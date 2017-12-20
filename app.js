var movie = require("./movie");
var threeFavoriteMovies = ['Forrest Gump', 'Fight Club', 'A Clockwork Orange'];
threeFavoriteMovies.forEach(function(film){
  movie(film);
});
