const url = "https://www.omdbapi.com/?apikey=7764f155&s=marvel";
async function fetchMovies() {
    const response = await fetch(url)
    const moviedata = await response.json()
    const movieCards = document.querySelector('.movie-list')
    console.log (moviedata.Search)
    movieCards.innerHTML = moviedata.Search.map((movie) => movieHTML(movie)).join('');
}

fetchMovies();
function showMovieimdb(imdbID) {
    window.open(`https://www.imdb.com/title/${imdbID}`, '_blank');
}
function movieHTML({ Title, Year, Director, Genre, Poster, imdbID }) {
    return `<div class="movie-card" onclick="showMovieimdb('${imdbID}')">
        <div class="movie-card__container">
           <h3>${Title}</h3>
           <p><b>Year:</b> ${Year}</p>
           <p><b>Director:</b> ${Director ? Director : 'N/A'}</p>
           <p><b>Genre:</b> ${Genre ? Genre : 'N/A'}</p>
           <p><b>Poster:</b> <img src="${Poster}" alt="${Title} Poster"></p>
         </div>
       </div>
     `;
}
