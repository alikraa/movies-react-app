import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS, savePageNumberCreator } from '../../store/actions';
import { VALUES } from '../../ts/view';
import { State } from '../../ts/interfaces';
import styles from './pagination.module.css';

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
    <div className={styles.pagination}>
      <div className={styles.paginationButtons}>
        <button
          type="button"
          className={styles.buttonBack}
          onClick={() =>
            changePageNumber(firstPageNumber - VALUES.defaultPageNumber)
          }
          disabled={firstPageNumber === VALUES.defaultPageNumber ? true : false}
        >
          Назад
        </button>
        <button
          type="button"
          className={styles.buttonStraight}
          onClick={() =>
            changePageNumber(firstPageNumber + VALUES.defaultPageNumber)
          }
          disabled={firstPageNumber === lastPageNumber ? true : false}
        >
          Вперед
        </button>
      </div>
      <p className={styles.paginationText}>
        {firstPageNumber} of {lastPageNumber}
      </p>
    </div>
  );
}

export { Pagination };
