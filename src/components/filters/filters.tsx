import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputCheckbox } from '../input-checkbox/input-checkbox';
import { Pagination } from '../pagination/pagination';
import genres from '../../assets/data/genres.json';
import { sortOptions, sortYears, VALUES } from '../../ts/view';
import {
  ACTIONS,
  sortingByOptionsCreator,
  sortingByReleaseYear,
  sortingByGenresCreator,
} from '../../store/actions';
import { moviesData } from '../../store/reducers';
import { State } from '../../ts/interfaces';
import styles from './filters.module.css';

function Filters() {
  const dispatch = useDispatch();
  const filmsList = useSelector((state: State) => state.moviesList);

  const options = sortOptions.map((item) => (
    <option key={item.id} value={item.value}>
      {item.option}
    </option>
  ));

  const years = sortYears.map((item) => (
    <option key={item.id} id={ACTIONS.RELEASE_YEAR} value={item.option}>
      {item.option}
    </option>
  ));

  const sortByOptions = (option: HTMLSelectElement['value']) => {
    sortOptions.find((item) => (item.value === option
      ? dispatch(sortingByOptionsCreator(item.value, filmsList))
      : null));
  };

  const sortByYear = (year: HTMLSelectElement['value']) => {
    dispatch(sortingByReleaseYear(year));
  };

  const sortByGenres = (genre: HTMLInputElement['checked'], id: number) => (genre
    ? dispatch(sortingByGenresCreator(ACTIONS.ADD_GENRE, id))
    : dispatch(sortingByGenresCreator(ACTIONS.DELETE_GENRE, id)));

  const resetAllFilters = () => {
    dispatch(
      sortingByOptionsCreator(ACTIONS.POPULAR_DESCENDING, moviesData.filmList),
    );
    dispatch(sortingByReleaseYear(VALUES.defaultYear));
    dispatch(
      sortingByGenresCreator(ACTIONS.RESET_ALL_GENRES, VALUES.defaultGenres),
    );
  };

  const checkboxes = genres.map((item) => (
    <InputCheckbox
      key={item.id}
      id={item.id}
      value={item.name}
      select={(event: React.ChangeEvent<HTMLInputElement>) => {
        sortByGenres(
          event.currentTarget.checked,
          Number(event.currentTarget.id),
        );
      }}
    />
  ));

  return (
    <div className={styles.filters}>
      <div className={styles.header}>
        <h2 className={styles.head}>Фильтры:</h2>
        <button
          type="submit"
          className={styles.headerButton}
          onClick={resetAllFilters}
        >
          Сбросить все фильтры
        </button>
      </div>
      <div className={styles.sort}>
        <p className={styles.sortText}>Сортировать по:</p>
        <select
          className={styles.sortGraduationButton}
          onChange={(event) => {
            sortByOptions(event.target.value);
          }}
        >
          {options}
        </select>
        <p className={styles.sortText}>Год релиза:</p>
        <select
          className={styles.sortYearsButton}
          onChange={(event) => {
            sortByYear(event.target.value);
          }}
        >
          {years}
        </select>
      </div>
      <div className={styles.genres}>{checkboxes}</div>
      <Pagination />
    </div>
  );
}

export { Filters };
