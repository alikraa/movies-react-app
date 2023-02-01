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
import { State } from '../../ts/interfaces';
import './filters.css';

function Filters() {
  const dispatch = useDispatch();
  const filmsList = useSelector((state: State) => state.moviesList);

  const checkboxes = genres.map((item) => {
    return (
      <InputCheckbox
        key={item.id}
        id={item.id}
        value={item.name}
        select={(event: React.ChangeEvent<HTMLInputElement>) => {
          console.log(event.currentTarget.checked, event.currentTarget.id);
          sortByGenres(
            event.currentTarget.checked,
            Number(event.currentTarget.id)
          );
        }}
      />
    );
  });

  const options = sortOptions.map((item) => {
    return (
      <option key={item.id} value={item.value}>
        {item.option}
      </option>
    );
  });

  const years = sortYears.map((item) => {
    return (
      <option key={item.id} id={ACTIONS.RELEASE_YEAR} value={item.option}>
        {item.option}
      </option>
    );
  });

  const sortByOptions = (option: HTMLSelectElement['value']) => {
    sortOptions.find((item) => {
      item.value === option
        ? dispatch(sortingByOptionsCreator(item.value, filmsList))
        : null;
    });
  };

  const sortByYear = (year: HTMLSelectElement['value']) => {
    dispatch(sortingByReleaseYear(year));
  };

  const sortByGenres = (genre: HTMLInputElement['checked'], id: number) => {
    genre
      ? dispatch(sortingByGenresCreator(ACTIONS.ADD_GENRE, id))
      : dispatch(sortingByGenresCreator(ACTIONS.DELETE_GENRE, id));
  };

  const resetAllFilters = () => {
    dispatch(sortingByOptionsCreator(ACTIONS.POPULAR_DESCENDING, filmsList));
    dispatch(sortingByReleaseYear(VALUES.defaultYear));
    dispatch(
      sortingByGenresCreator(ACTIONS.RESET_ALL_GENRES, VALUES.defaultGenres)
    );
  };

  return (
    <div className="movies-app__filters">
      <div className="filters__header">
        <h2 className="head">Фильтры:</h2>
        <button
          type="submit"
          className="filters__header-button"
          onClick={resetAllFilters}
        >
          Сбросить все фильтры
        </button>
      </div>
      <div className="filters__sort">
        <p className="filters__sort-text">Сортировать по:</p>
        <select
          className="filters__sort-graduation"
          onChange={(event) => {
            sortByOptions(event.target.value);
          }}
        >
          {options}
        </select>
        <p className="filters__sort-text">Год релиза:</p>
        <select
          className="filters__sort-years"
          onChange={(event) => {
            sortByYear(event.target.value);
          }}
        >
          {years}
        </select>
      </div>
      <div className="filters__genres">{checkboxes}</div>
      <Pagination />
    </div>
  );
}

export { Filters };
