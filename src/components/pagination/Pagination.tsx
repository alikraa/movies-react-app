import './Pagination.css';

function Pagination() {
  return (
    <div className="movies-app__pagination">
      <div className="pagination__buttons">
        <button type="button" className="button-back">
          Назад
        </button>
        <button type="button" className="button-straight">
          Вперед
        </button>
      </div>
      <p className="pagination__text">1 of 1455</p>
    </div>
  );
}

export { Pagination };
