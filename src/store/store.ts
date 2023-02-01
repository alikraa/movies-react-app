import { createStore, combineReducers } from 'redux';
import {
  pageNumber,
  sortByOptions,
  sortByYears,
  sortByGenres,
} from './reducers';

const reducers = combineReducers({
  moviesList: sortByOptions,
  pageNumber,
  releaseYear: sortByYears,
  genres: sortByGenres,
});

const store = createStore(reducers);
store.subscribe(() => console.log(store.getState()));

export { store };
