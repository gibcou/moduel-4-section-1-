const url = "https://www.omdbapi.com/?apikey=7764f155&s=marvel";
async function fetchMovies() {
    const response = await fetch(url)
    const data = await response.json()
    console.log (data.Search)

}
fetchMovies()
