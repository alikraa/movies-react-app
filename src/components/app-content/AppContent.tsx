import { useState } from 'react';
import { Filters } from '../filters/Filters';
import { FilmList } from '../film-list/FilmList';
import { PageContext } from '../../ts/pageContext';
import { defaultPageNumber } from '../../ts/view';
import './AppContent.css';

function AppContent() {
  const [pageNumber, setPageNumber] = useState(defaultPageNumber);
  return (
    <div className="movies-app__app-content">
      <PageContext.Provider value={{ pageNumber, setPageNumber }}>
        <Filters />
        <FilmList />
      </PageContext.Provider>
    </div>
  );
}

export { AppContent };
