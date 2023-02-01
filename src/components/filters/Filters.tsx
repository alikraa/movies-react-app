import { InputCheckbox } from '../input-checkbox/InputCheckbox';
import { Pagination } from '../pagination/Pagination';
import genres from '../../assets/data/genres.json';
import './Filters.css';

function Filters() {
  const checkboxes = genres.map((item) => {
    return <InputCheckbox key={item.id} id={item.id} value={item.name} />;
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
      <div className="filters__genres">{checkboxes}</div>
      <Pagination />
    </div>
  );
}

export { Filters };
