async function searchMovies() {
    const apiKey = 'c5d6f49c';
    const query = document.getElementById('search-input').value;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Check if the API returned any movies
        if (data.Response === "True") {
            renderMovies(data.Search);
        } else {
            alert('No movies found!');
        }
    } catch (error) {
        console.error('Error fetching the movie data:', error);
    }
}

function renderMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        
        movieElement.innerHTML = `
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
        `;
        
        movieContainer.appendChild(movieElement);
    });
}