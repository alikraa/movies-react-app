import { ACTIONS } from './actions';
import { VALUES, defaultSortingMovies } from '../ts/view';
import {
  PageActions,
  SortingActions,
  ReleaseYearAction,
  GenreActions,
} from '../ts/interfaces';

const pages = {
  firstPageNumber: VALUES.defaultPageNumber,
  lastPageNumber: VALUES.defaultPageNumber,
};

const moviesData = {
  filmList: defaultSortingMovies(),
  defaultReleaseYear: VALUES.defaultYear,
};

function pageNumber(state = pages, action: PageActions) {
  switch (action.type) {
    case ACTIONS.START_PAGE:
      return { ...state, firstPageNumber: action.pageNumber };
    case ACTIONS.END_PAGE:
      return { ...state, lastPageNumber: action.pageNumber };
    default:
      return state;
  }
}

function sortByOptions(state = moviesData.filmList, action: SortingActions) {
  switch (action.type) {
    case ACTIONS.POPULAR_DESCENDING:
      return (state = moviesData.filmList);

    case ACTIONS.POPULAR_ASCENDING:
      return (state = [...action.payload].sort((firstMovie, secondMovie) => {
        return firstMovie.popularity < secondMovie.popularity ? -1 : 1;
      }));

    case ACTIONS.RATING_DESCENDING:
      return (state = [...action.payload].sort((firstMovie, secondMovie) => {
        return firstMovie.vote_average > secondMovie.vote_average ? -1 : 1;
      }));
    case ACTIONS.RATING_ASCENDING:
      return (state = [...action.payload].sort((firstMovie, secondMovie) => {
        return firstMovie.vote_average < secondMovie.vote_average ? -1 : 1;
      }));
    default:
      return state;
  }
}

function sortByYears(
  state = moviesData.defaultReleaseYear,
  action: ReleaseYearAction
) {
  switch (action.type) {
    case ACTIONS.RELEASE_YEAR:
      return (state = action.year);
    default:
      return state;
  }
}

function sortByGenres(state = [], action: GenreActions) {
  switch (action.type) {
    case ACTIONS.ADD_GENRE:
      return [...state, action.genres];
    case ACTIONS.DELETE_GENRE:
      return [...state].filter((item) => item !== action.genres);
    case ACTIONS.RESET_ALL_GENRES:
      return (state = VALUES.defaultGenres);
    default:
      return state;
  }
}

export { pageNumber, sortByOptions, sortByYears, sortByGenres };
