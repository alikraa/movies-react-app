import { InputCheckbox } from '../input-checkbox/InputCheckbox';
import { Pagination } from '../pagination/Pagination';
import './Filters.css';

function Filters() {
  const genres = [
    { id: 1, genre: 'боевик' },
    { id: 2, genre: 'приключения' },
    { id: 3, genre: 'мультфильм' },
    { id: 4, genre: 'комедия' },
    { id: 5, genre: 'криминал' },
    { id: 6, genre: 'документальный' },
    { id: 7, genre: 'драма' },
    { id: 8, genre: 'семейный' },
    { id: 9, genre: 'фэнтези' },
    { id: 10, genre: 'история' },
    { id: 11, genre: 'ужасы' },
    { id: 12, genre: 'музыка' },
    { id: 13, genre: 'детектив' },
    { id: 14, genre: 'мелодрама' },
    { id: 15, genre: 'фантастика' },
    { id: 16, genre: 'телевизионный фильм' },
    { id: 17, genre: 'триллер' },
    { id: 18, genre: 'военный' },
    { id: 19, genre: 'вестерн' },
  ];

  const checkboxes = genres.map((item) => {
    return <InputCheckbox id={item.id} value={item.genre} />;
  });

  return (
    <div className="movies-app__filters">
      <div className="filters__header">
        <h2 className="head">Фильтры:</h2>
        <button type="submit" className="filters__header-button">
          Сбросить все фильтры
        </button>
      </div>
      <div className="filters__sort">
        <p className="filters__sort-text">Сортировать по:</p>
        <select className="filters__sort-graduation">
          <option>Популярные по убыванию</option>
          <option>Популярные по возрастанию</option>
        </select>
        <p className="filters__sort-text">Год релиза:</p>
        <select className="filters__sort-years">
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
        </select>
      </div>
      <div className="filters__genres">
        {checkboxes}
      </div>
      <Pagination />
    </div>
  );
}

export { Filters };
