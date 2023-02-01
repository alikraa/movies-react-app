import moviesData from '../assets/data/moviesData.json';

const defaultPageNumber: number = 1;
const displayedMovies: number = 10;
const totalNumberPages: number = Math.ceil(moviesData.length / displayedMovies);

function showMovies(page: number) {
  const end: number = displayedMovies * page;
  const start: number = end - displayedMovies;
  return moviesData.slice(start, end);
}

export { defaultPageNumber, displayedMovies, totalNumberPages, showMovies };
