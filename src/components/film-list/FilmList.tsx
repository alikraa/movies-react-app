import { FilmCard } from './FilmCard';
import moviesData from '../../assets/data/moviesData.json';
import './FilmList.css';

function FilmList() {
  const moviesList = moviesData.map((item) => {
    return (
      <FilmCard
        key={item.id}
        filmCover={item.poster_path}
        rating={item.vote_average}
        filmName={item.title}
      />
    );
  });
  return <div className="movies-app__film-list">{moviesList}</div>;
}

export { FilmList };
