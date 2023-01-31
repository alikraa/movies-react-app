import { Filters } from '../filters/Filters';
import { FilmList } from '../film-list/FilmList';
import './AppContent.css';

function AppContent() {
  return (
    <div className="movies-app__app-content">
      <Filters />
      <FilmList />
    </div>
  );
}

export { AppContent };
