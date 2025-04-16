// Movie data - array of objects
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    director: "Frank Darabont",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
    director: "Francis Ford Coppola",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    director: "Christopher Nolan",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    director: "Quentin Tarantino",
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    director: "Christopher Nolan",
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
  },
  {
    id: 6,
    title: "Parasite",
    year: 2019,
    genre: "Drama",
    rating: 8.6,
    director: "Bong Joon Ho",
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    director: "Lana Wachowski, Lilly Wachowski",
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    id: 8,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    director: "Robert Zemeckis",
    plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
  },
  {
    id: 9,
    title: "The Silence of the Lambs",
    year: 1991,
    genre: "Thriller",
    rating: 8.6,
    director: "Jonathan Demme",
    plot: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    id: 10,
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: 8.5,
    director: "Ridley Scott",
    plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  }
];

// DOM Elements
const cardContainer = document.getElementById('card-container');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const genreFilter = document.getElementById('genreFilter');
const yearFilter = document.getElementById('yearFilter');
const ratingFilter = document.getElementById('ratingFilter');
const addMovieBtn = document.getElementById('addMovieBtn');
const addMovieModal = document.getElementById('addMovieModal');
const closeModal = document.querySelector('.close');
const movieForm = document.getElementById('movieForm');
const genreSelect = document.getElementById('genre');

// Initialize the app
function init() {
  displayMovies(movies);
  populateFilters();
  
  // Event Listeners
  searchBtn.addEventListener('click', filterMovies);
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') filterMovies();
  });
  
  genreFilter.addEventListener('change', filterMovies);
  yearFilter.addEventListener('change', filterMovies);
  ratingFilter.addEventListener('change', filterMovies);
  
  addMovieBtn.addEventListener('click', () => {
    addMovieModal.style.display = 'block';
  });
  
  closeModal.addEventListener('click', () => {
    addMovieModal.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === addMovieModal) {
      addMovieModal.style.display = 'none';
    }
  });
  
  movieForm.addEventListener('submit', addNewMovie);
}

// Display movies in the catalog
function displayMovies(moviesToDisplay) {
  cardContainer.innerHTML = '';
  
  if (moviesToDisplay.length === 0) {
    cardContainer.innerHTML = '<p class="no-results">No movies found matching your criteria.</p>';
    return;
  }
  
  const templateCard = document.querySelector('.card');
  
  moviesToDisplay.forEach(movie => {
    const movieCard = templateCard.cloneNode(true);
    movieCard.style.display = 'block';
    
    movieCard.querySelector('h2').textContent = movie.title;
    movieCard.querySelector('img').src = movie.poster;
    movieCard.querySelector('img').alt = movie.title + ' Poster';
    movieCard.querySelector('.year').textContent = movie.year;
    movieCard.querySelector('.genre').textContent = movie.genre;
    movieCard.querySelector('.rating').textContent = movie.rating;
    movieCard.querySelector('.plot').textContent = movie.plot;
    
    cardContainer.appendChild(movieCard);
  });
}

// Populate filter dropdowns
function populateFilters() {
  // Get unique genres
  const genres = [...new Set(movies.map(movie => movie.genre))];
  genres.sort();
  
  genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
    
    // Also populate for the add movie form
    const newOption = option.cloneNode(true);
    genreSelect.appendChild(newOption);
  });
  
  // Get unique years
  const years = [...new Set(movies.map(movie => movie.year))];
  years.sort((a, b) => b - a);
  
  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
  });
}

// Filter and sort movies
function filterMovies() {
  let filteredMovies = [...movies];
  
  // Search by title
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.director.toLowerCase().includes(searchTerm) ||
      movie.plot.toLowerCase().includes(searchTerm)
    );
  }
  
  // Filter by genre
  const selectedGenre = genreFilter.value;
  if (selectedGenre) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.genre === selectedGenre
    );
  }
  
  // Filter by year
  const selectedYear = yearFilter.value;
  if (selectedYear) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.year == selectedYear
    );
  }
  
  // Filter by rating
  const selectedRating = ratingFilter.value;
  if (selectedRating) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.rating >= parseFloat(selectedRating)
    );
  }
  
  displayMovies(filteredMovies);
}

// Add a new movie
function addNewMovie(e) {
  e.preventDefault();
  
  const newId = movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
  
  const newMovie = {
    id: newId,
    title: document.getElementById('title').value,
    year: parseInt(document.getElementById('year').value),
    genre: document.getElementById('genre').value,
    rating: parseFloat(document.getElementById('rating').value),
    director: "Unknown Director",
    plot: document.getElementById('plot').value,
    poster: document.getElementById('poster').value
  };
  
  movies.push(newMovie);
  
  // Reset form and close modal
  movieForm.reset();
  addMovieModal.style.display = 'none';
  
  // Update UI
  filterMovies();
  
  // Update filters if needed
  updateFilters(newMovie);
}

// Update filters if new movie has new genre/year
function updateFilters(newMovie) {
  // Check genre
  const genreExists = [...genreFilter.options].some(option => 
    option.value === newMovie.genre
  );
  
  if (!genreExists) {
    const option = document.createElement('option');
    option.value = newMovie.genre;
    option.textContent = newMovie.genre;
    genreFilter.appendChild(option);
    genreSelect.appendChild(option.cloneNode(true));
  }
  
  // Check year
  const yearExists = [...yearFilter.options].some(option => 
    option.value == newMovie.year
  );
  
  if (!yearExists) {
    const option = document.createElement('option');
    option.value = newMovie.year;
    option.textContent = newMovie.year;
    
    // Insert in correct position to maintain sorted order
    const years = [...yearFilter.options].map(opt => parseInt(opt.value)).filter(val => !isNaN(val));
    let insertIndex = years.findIndex(year => year < newMovie.year);
    
    if (insertIndex === -1) {
      yearFilter.appendChild(option);
    } else {
      yearFilter.insertBefore(option, yearFilter.options[insertIndex + 1]);
    }
  }
}

// Initialize the application
init();
