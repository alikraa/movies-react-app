import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilmCard } from './film-card';
import { VALUES, showMovies, sliceList } from '../../ts/view';
import { ACTIONS, savePageNumberCreator } from '../../store/actions';
import { State } from '../../ts/interfaces';
import styles from './film-list.module.css';

function FilmsList() {
  const dispatch = useDispatch();
  const firstPageNumber = useSelector(
    (state: State) => state.pageNumber.firstPageNumber
  );
  const currentFilmsList = useSelector((state: State) => state.moviesList);
  const currentReleaseYear = useSelector((state: State) => state.releaseYear);
  const genres = useSelector((state: State) => state.genres);

  const movies = showMovies(currentFilmsList, currentReleaseYear, genres);

  useEffect(() => {
    if (movies) {
      const lastPageNumber = Math.ceil(movies.length / VALUES.displayedMovies);
      dispatch(savePageNumberCreator(ACTIONS.END_PAGE, lastPageNumber));
    }
  });

  const newMoviesList = sliceList(movies, firstPageNumber);
  const moviesList = newMoviesList.map((item) => {
    const imagePath = item.poster_path || item.backdrop_path;
    const imageUrl = `https://image.tmdb.org/t/p/w500/${imagePath}`;

    return (
      <FilmCard
        key={item.id}
        item={item}
        filmId={item.id}
        filmCover={imageUrl}
        rating={item.vote_average}
        filmName={item.title}
      />
    );
  });
  return <div className={styles.filmList}>{moviesList}</div>;
}

export { FilmsList };
