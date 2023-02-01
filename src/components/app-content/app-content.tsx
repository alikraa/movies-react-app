import { Filters } from '../filters/filters';
import { FilmsList } from '../film-list/film-list';
import './app-content.css';

function AppContent() {
  return (
    <div className="movies-app__app-content">
      <Filters />
      <FilmsList />
    </div>
  );
}

export { AppContent };
