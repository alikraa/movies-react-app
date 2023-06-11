import { useSelector } from 'react-redux';
import { State } from '../../ts/interfaces';
import { getData, VALUES } from '../../ts/view';
import styles from './film-list.module.css';

function FilmDetails() {
  const filmsList = useSelector((state: State) => state.moviesList);
  const currentFilmId = getData(VALUES.currentFilmDetails);
  const filmId = filmsList.find((item) => item.id === currentFilmId);
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  const colorTheme = useSelector((state: State) => state.colorTheme.darkTheme);

  return (
    <div className={styles.details}>
      <div className={styles.detailsHeader}>
        <img
          alt="Movie Poster"
          src={`${imageUrl}${filmId?.backdrop_path}`}
          className={styles.backgroundImg}
        />
        <div className={styles.content}>
          <img
            alt="Movie Cover"
            src={`${imageUrl}${filmId?.poster_path}`}
            className={styles.posterImg}
          />
          <h1 className={styles.contentHeader}>{filmId?.title}</h1>
          <p className={styles.contentRating}>
            Рейтинг:
            {' '}
            {filmId?.vote_average}
          </p>
          <p className={styles.contentOverview}>{filmId?.overview}</p>
        </div>
      </div>
      <div className={styles.more}>
        <ul className="content__details">
          <h2 className={styles.moreHeader}>Детали</h2>
          <li className={styles.moreItem}>
            <span className={colorTheme ? styles.darkTheme : styles.itemTitle}>
              Статус:
            </span>
            <p className={styles.itemDetail}>
              {filmId?.release_date ? 'Released' : '-'}
            </p>
          </li>
          <li className={styles.moreItem}>
            <span className={colorTheme ? styles.darkTheme : styles.itemTitle}>
              Дата выхода:
            </span>
            <p className={styles.itemDetail}>{filmId?.release_date}</p>
          </li>
          <li className={styles.moreItem}>
            <span className={colorTheme ? styles.darkTheme : styles.itemTitle}>
              Язык оригинала:
            </span>
            <p className={styles.itemDetail}>{filmId?.original_language}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { FilmDetails };
