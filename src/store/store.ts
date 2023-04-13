import { createStore, combineReducers } from 'redux';
import {
  pageNumber,
  sortByOptions,
  sortByYears,
  sortByGenres,
  checkAuthorization,
  changeTheme,
} from './reducers';

const reducers = combineReducers({
  moviesList: sortByOptions,
  pageNumber,
  releaseYear: sortByYears,
  genres: sortByGenres,
  isAuthorization: checkAuthorization,
  colorTheme: changeTheme,
});

const store = createStore(reducers);
store.subscribe(() => console.log(store.getState()));

export { store };
