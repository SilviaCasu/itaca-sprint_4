// Exercise 1: Get the array of all directors.

function getAllDirectors(movies) {

  let result = movies.map(directores => directores.director);
  console.log(result);
  return result;

}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const moviesDirector = movies.filter(directores => directores.director === director);
  console.log(moviesDirector);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(movies) {

  const scoreSuma = movies.reduce((acc, numero) => acc += numero.score, 0);
  let mediaScore = scoreSuma / movies.length;
  let media = Number((mediaScore).toFixed(2));
  return media;
}

function moviesAverageOfDirector(movies, director) {
  const moviesDirector = movies.filter(directores => directores.director === director);
  media = moviesAverage(moviesDirector);
  console.log(media);
  return media;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {

  let extraidosTitle = movies.map(titles => titles.title);
  ordenados = extraidosTitle.sort(compareTitle);
  extraidosTitle = ordenados.slice(0, 20);
  console.log(ordenados);
  console.log(extraidosTitle);
  return extraidosTitle
  function compareTitle(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  }

}
// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const copy = movies.slice(0);
  const ordenadosYear = (a, b) => a.year - b.year;
  const ordenadosTitle = (a, b) => a.title.localeCompare(b.title);
  const yearAndTitle = (a, b) => ordenadosYear(a, b) || ordenadosTitle(a, b);

  const ordenadosYAA = copy.sort(yearAndTitle);
  console.log(movies); console.log(ordenadosYAA); return ordenadosYAA;


}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const filterCategory = movies.filter((movie) => {
    return movie.genre.includes(genre);
  })
  finalCategories = filterCategory.filter(data => data.score != '');
  const mediaScoreHistory = moviesAverage(finalCategories)
  return mediaScoreHistory;
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
