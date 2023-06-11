import { filmsList } from './movies-data';
import { FilmData } from './interfaces';
import { ACTIONS } from '../store/actions';

const VALUES = {
  defaultYear: '2020',
  defaultPageNumber: 1,
  displayedMovies: 12,
  defaultGenres: [],
  empty: 0,
  favouritedList: 'favouritedList',
  watchLaterList: 'watchLaterList',
  star: 'star',
  allElements: 'Показать все',
  timer: 3000,
  currentFilmDetails: 'currentFilmDetails',
  defaultList: [],
  darkTheme: 'darkTheme',
  popular: 'популярный',
  unknown: 'неизвестный',
  high: 'высокая',
  low: 'низкая',
};

const userData = {
  userName: 'userName',
  userPassword: 'userPassword_123',
};

const sortOptions = [
  {
    id: 1,
    option: 'Популярные по убыванию',
    value: ACTIONS.POPULAR_DESCENDING,
  },
  {
    id: 2,
    option: 'Популярные по возрастанию',
    value: ACTIONS.POPULAR_ASCENDING,
  },
  { id: 3, option: 'Рейтинг по убыванию', value: ACTIONS.RATING_DESCENDING },
  { id: 4, option: 'Рейтинг по возрастанию', value: ACTIONS.RATING_ASCENDING },
];

const sortYears = [
  { id: 1, option: '2020' },
  { id: 2, option: '2019' },
  { id: 3, option: '2018' },
  { id: 4, option: '2017' },
];

const score = [
  { id: 1, value: 'высокая' },
  { id: 2, value: 'низкая' },
];

const popularity = [
  { id: 1, value: 'популярный' },
  { id: 2, value: 'неизвестный' },
];

function defaultSortingMovies() {
  return [...filmsList].sort((firstMovie, secondMovie) => (
    firstMovie.popularity > secondMovie.popularity ? -1 : 1
  ));
}

function sortingFilmsListGenres(data: FilmData[], genres: number[]) {
  return data.filter((item) => genres.find((genre) => {
    if (item.genre_ids.includes(genre)) {
      return item;
    }
  }));
}

function sortingFilmsDataReleaseYear(data: FilmData[], year: string) {
  return data.filter((item) => item.release_date.includes(year));
}

const showMovies = (data: FilmData[], year: string, genres: number[]) => {
  const dataList = sortingFilmsDataReleaseYear(data, year);

  if (genres.length > VALUES.empty) {
    const filteredDataList = sortingFilmsListGenres(dataList, genres);
    return filteredDataList;
  }
  return dataList;
};

function sliceList(data: FilmData[], startPage: number) {
  const end = VALUES.displayedMovies * startPage;
  const start = end - VALUES.displayedMovies;
  return data.slice(start, end);
}

function setData(
  key: string,
  value: string | boolean | FilmData | FilmData[] | number | number[],
) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getData(key: string) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function defineList(moviesList: FilmData[], movie: FilmData, listName: string) {
  const findMovie = moviesList.find((film) => film.id === movie.id);

  if (findMovie) {
    const newList = moviesList.filter((film: FilmData) => film.id !== movie.id);
    setData(listName, newList);
  } else {
    const updatedList = [...moviesList, movie];
    setData(listName, updatedList);
  }
}

function checkMovie(
  listName: string,
  movie: FilmData,
  setIcon: (arg0: boolean) => void,
  authorization: boolean,
) {
  const userList = getData(listName) || VALUES.defaultList;
  return userList.find((film: FilmData) => {
    if (film.id === movie.id && authorization) {
      setIcon(true);
    }
  });
}

export {
  sortOptions,
  sortYears,
  score,
  popularity,
  sortingFilmsDataReleaseYear,
  sortingFilmsListGenres,
  defaultSortingMovies,
  VALUES,
  userData,
  showMovies,
  sliceList,
  setData,
  getData,
  defineList,
  checkMovie,
};
