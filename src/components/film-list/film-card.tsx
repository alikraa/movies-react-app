import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Authorization } from '../authorization/authorization';
import { FilmCardProps, State } from '../../ts/interfaces';
import filmIcon from '../../assets/img/film-icon.svg';
import selectedStarIcon from '../../assets/img/selected-star-icon.svg';
import starIcon from '../../assets/img/star-icon.svg';
import selectedBookmarkIcon from '../../assets/img/selected-bookmark-icon.svg';
import bookmarkIcon from '../../assets/img/bookmark-icon.svg';
import { setFilmsList, VALUES } from '../../ts/view';
import styles from './film-list.module.css';

function FilmCard({
  item,
  filmCover,
  rating,
  filmName,
  filmId,
}: FilmCardProps) {
  const isAuthorization = useSelector(
    (state: State) => state.isAuthorization.authorizationFlag
  );
  const [authorization, setAuthorization] = useState(true);

  const [star, setStar] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const [favouritedList, setFavouritedList] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);

  useEffect(() => {
    if (isAuthorization) {
      setAuthorization(true);
    }
  });

  const addList = (event: React.MouseEvent<HTMLImageElement>) => {
    if (event.currentTarget.id === VALUES.star) {
      const updatedFavouritedList = [...favouritedList, item];
      setFilmsList(VALUES.favouritedList, updatedFavouritedList);
    } else {
      const updatedWatchLaterList = [...watchLaterList, item];
      setFilmsList(VALUES.watchLaterList, updatedWatchLaterList);
    }
  };

  const checkAuthorization = (
    event: React.MouseEvent<HTMLImageElement>,
    icon: boolean,
    setIcon: (arg0: boolean) => void
  ) => {
    if (isAuthorization) {
      addList(event);

      if (icon) {
        setIcon(false);
      } else {
        setIcon(true);
      }
    } else {
      setAuthorization(false);
    }
  };

  return (
    <div className={styles.filmCardWrapper} id={filmId.toString()}>
      <div className={styles.filmCardCover}>
        <img
          src={filmCover ?? filmIcon}
          alt="Movie Cover"
          className={styles.cover}
        />
      </div>
      <div className={styles.filmCardInfo}>
        <div className={styles.filmCardHeader}>
          <p className={styles.rating}>Рейтинг: {rating ?? '8.4'}</p>
          <img
            src={star ? selectedStarIcon : starIcon}
            alt="Favourites"
            className={styles.star}
            id="star"
            onClick={(event) => {
              checkAuthorization(event, star, setStar);
            }}
          />
          <img
            src={bookmark ? selectedBookmarkIcon : bookmarkIcon}
            alt="Watch Later"
            className={styles.bookmark}
            id="bookmark"
            onClick={(event) => {
              checkAuthorization(event, bookmark, setBookmark);
            }}
          />
        </div>
        <h3 className={styles.filmName}>
          {filmName ?? 'Истребитель демонов: Поезд "Бесконечный"'}
        </h3>
        <button className={styles.buttonMore}>
          <Link
            to={`/more/${filmId}`}
            onClick={() => {
              localStorage.setItem(
                'currentFilmDetails',
                JSON.stringify(filmId)
              );
            }}
          >
            Подробнее
          </Link>
        </button>
      </div>
      <Authorization isOpen={authorization} setIsOpen={setAuthorization} />
    </div>
  );
}

export { FilmCard };
