import { FilmCard } from './FilmCard';
import './FilmList.css';

function FilmList() {
  return (
    <div className="movies-app__film-list">
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
    </div>
  );
}

export { FilmList };
