import { FilmData } from '../ts/interfaces';

const ACTIONS = {
  START_PAGE: 'SAVE_PAGE',
  END_PAGE: 'END_PAGE',
  POPULAR_DESCENDING: 'POPULAR_DESCENDING',
  POPULAR_ASCENDING: 'POPULAR_ASCENDING',
  RATING_DESCENDING: 'RATING_DESCENDING',
  RATING_ASCENDING: 'RATING_ASCENDING',
  RELEASE_YEAR: 'RELEASE_YEAR',
  ADD_GENRE: 'ADD_GENRE',
  DELETE_GENRE: 'DELETE_GENRE',
  RESET_ALL_GENRES: 'RESET_ALL_GENRES',
};

function sortingByOptionsCreator(type: string, payload: FilmData[]) {
  return { type, payload };
}

function sortingByGenresCreator(type: string, genres: number | number[]) {
  return { type, genres };
}

function savePageNumberCreator(type: string, pageNumber: number) {
  return { type, pageNumber };
}

function sortingByReleaseYear(year: string) {
  return { type: ACTIONS.RELEASE_YEAR, year };
}

export {
  ACTIONS,
  sortingByOptionsCreator,
  sortingByGenresCreator,
  savePageNumberCreator,
  sortingByReleaseYear,
};
