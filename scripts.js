const movieApiKey = '5d54dacd'
const movieApiUrl = 'https://www.omdbapi.com/'
const movieNameInput = document.getElementById('movie')

async function fetchMoveDetails(event) {
  event.preventDefault()
  const movieName = movieNameInput.value
  response = await fetch(`${movieApiUrl}?apikey=${movieApiKey}&t=${movieName}`)
  const movieData = await response.json()
  if (movieData.Error) {
    alert('Movie not found!')
    return
  }
  console.log(movieData)
  displayMovieData(movieData)
}

function displayMovieData(movie) {
  const moveDetailsList = document.getElementById('movie-details')
  moveDetailsList.innerHTML =  `
    <p> You chose ${movie.Title}!</p>
      <ul>
        <li> Year: ${movie.Year}</li>
        <li> Director: ${movie.Director} </li>
        <li> Genre: ${movie.Genre} </li>
        <li> Plot: ${movie.Plot} </li>
      </ul>
  `
}