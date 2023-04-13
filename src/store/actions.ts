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
  IS_AUTHORIZATION: 'IS_AUTHORIZATION',
  FAVOURITED_LIST: 'FAVOURITED_LIST',
  WATCH_LATER_LIST: 'WATCH_LATER_LIST',
  COLOR_THEME: 'COLOR_THEME',
  FAV_LIST: 'FAV_LIST',
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

function authorizationCreator(flag: boolean) {
  return { type: ACTIONS.IS_AUTHORIZATION, flag };
}

function colorThemeCreator(payload: boolean) {
  return { type: ACTIONS.COLOR_THEME, payload };
}

export {
  ACTIONS,
  sortingByOptionsCreator,
  sortingByGenresCreator,
  savePageNumberCreator,
  sortingByReleaseYear,
  authorizationCreator,
  colorThemeCreator,
};
