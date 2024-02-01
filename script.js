

var movieDatabase = [
    { title: "Movie 1", rating: 3 },
    { title: "Movie 2", rating: 4 },
    { title: "Movie 3", rating: 5 },
    { title: "Movie 4", rating: 2 },
    { title: "Movie 5", rating: 1 },
    { title: "Movie 6", rating: 3 },
    { title: "Movie 7", rating: 4 },
    { title: "Movie 8", rating: 5 },
    
  ];
  

  function addMovie() {
    var title = document.getElementById('movieTitle').value;
    var rating = parseFloat(document.getElementById('movieRating').value);
  
    movieDatabase.push({ title: title, rating: rating });
  
    displayMovies();
  }
  
  function filterMovies() {
    var selectedRating = document.getElementById('ratingFilter').value;
  
    var filteredMovies = movieDatabase.filter(movie => {
      if (selectedRating === "all") {
        return true;
      } else {
        return Math.floor(movie.rating) == selectedRating;
      }
    });
  
    displayMovies(filteredMovies, 'filteredMovieList');
  }
  
  function displayMovies(movies = movieDatabase, targetElementId = 'movieList') {
    var targetElement = document.getElementById(targetElementId);
    targetElement.innerHTML = '';
  
    movies.map(movie => {
      targetElement.innerHTML += `<li>${movie.title} - Rating: ${movie.rating}</li>`;
    });
  }
  
  displayMovies();
  