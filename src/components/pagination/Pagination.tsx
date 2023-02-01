import { useContext } from 'react';
import { PageContext } from '../../ts/pageContext';
import { defaultPageNumber, totalNumberPages } from '../../ts/view';
import './Pagination.css';

function Pagination() {
  const pageData = useContext(PageContext);

  const changePageNumber = (page: number) => {
    if (page < defaultPageNumber || page > totalNumberPages) return;
    pageData.setPageNumber(page);
  };

  return (
    <div className="movies-app__pagination">
      <div className="pagination__buttons">
        <button
          type="button"
          className="button-back"
          onClick={() =>
            changePageNumber(pageData.pageNumber - defaultPageNumber)
          }
          disabled={pageData.pageNumber === defaultPageNumber ? true : false}
        >
          Назад
        </button>
        <button
          type="button"
          className="button-straight"
          onClick={() =>
            changePageNumber(pageData.pageNumber + defaultPageNumber)
          }
          disabled={pageData.pageNumber === totalNumberPages ? true : false}
        >
          Вперед
        </button>
      </div>
      <p className="pagination__text">
        {pageData.pageNumber} of {totalNumberPages}
      </p>
    </div>
  );
}

export { Pagination };
