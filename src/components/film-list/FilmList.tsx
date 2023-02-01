import { useContext } from 'react';
import { FilmCard } from './FilmCard';
import { showMovies } from '../../ts/view';
import { PageContext } from '../../ts/pageContext';
import './FilmList.css';

function FilmList() {
  const pagesData = useContext(PageContext);

  const newMoviesList = showMovies(pagesData.pageNumber);
  const moviesList = newMoviesList.map((item) => {
    const imagePath = item.poster_path || item.backdrop_path;
    const imageUrl = `https://image.tmdb.org/t/p/w500/${imagePath}`;

    return (
      <FilmCard
        key={item.id}
        filmCover={imageUrl}
        rating={item.vote_average}
        filmName={item.title}
      />
    );
  });
  return <div className="movies-app__film-list">{moviesList}</div>;
}

export { FilmList };
