import { filmsList } from './movies-data';
import { FilmData } from './interfaces';
import { ACTIONS } from '../store/actions';

const VALUES = {
  defaultYear: '2020',
  defaultPageNumber: 1,
  displayedMovies: 10,
  defaultGenres: [],
  empty: 0,
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

function defaultSortingMovies() {
  return [...filmsList].sort((firstMovie, secondMovie) => {
    return firstMovie.popularity > secondMovie.popularity ? -1 : 1;
  });
}

function sortingFilmsListGenres(data: FilmData[], genres: number[]) {
  return data.filter((item) => {
    return genres.find((genre) => {
      if (item.genre_ids.includes(genre)) {
        return item;
      }
    });
  });
}

function sortingFilmsDataReleaseYear(data: FilmData[], year: string) {
  return data.filter((item) => {
    return item.release_date.includes(year);
  });
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

export {
  sortOptions,
  sortYears,
  sortingFilmsDataReleaseYear,
  sortingFilmsListGenres,
  defaultSortingMovies,
  VALUES,
  showMovies,
  sliceList,
};
