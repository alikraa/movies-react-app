import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS, savePageNumberCreator } from '../../store/actions';
import { VALUES } from '../../ts/view';
import { State } from '../../ts/interfaces';
import './pagination.css';

function Pagination() {
  const dispatch = useDispatch();
  const firstPageNumber = useSelector(
    (state: State) => state.pageNumber.firstPageNumber
  );

  const lastPageNumber = useSelector(
    (state: State) => state.pageNumber.lastPageNumber
  );

  useEffect(() => {
    firstPageNumber > lastPageNumber
      ? changePageNumber(VALUES.defaultPageNumber)
      : firstPageNumber;
  });

  const changePageNumber = (page: number) => {
    if (page < VALUES.defaultPageNumber || page > lastPageNumber) return;
    dispatch(savePageNumberCreator(ACTIONS.START_PAGE, page));
  };

  return (
    <div className="movies-app__pagination">
      <div className="pagination__buttons">
        <button
          type="button"
          className="button-back"
          onClick={() =>
            changePageNumber(firstPageNumber - VALUES.defaultPageNumber)
          }
          disabled={firstPageNumber === VALUES.defaultPageNumber ? true : false}
        >
          Назад
        </button>
        <button
          type="button"
          className="button-straight"
          onClick={() =>
            changePageNumber(firstPageNumber + VALUES.defaultPageNumber)
          }
          disabled={firstPageNumber === lastPageNumber ? true : false}
        >
          Вперед
        </button>
      </div>
      <p className="pagination__text">
        {firstPageNumber} of {lastPageNumber}
      </p>
    </div>
  );
}

export { Pagination };
