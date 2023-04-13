import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ACTIONS,
  authorizationCreator,
  colorThemeCreator,
  sortingByOptionsCreator,
} from '../../store/actions';
import { State } from '../../ts/interfaces';
import { Authorization } from '../authorization/authorization';
import { getData, userData, VALUES } from '../../ts/view';
import sun from '../../assets/img/sun-icon.svg';
import moon from '../../assets/img/moon-icon.svg';
import movieLabLogo from '../../assets/img/movie-icon.svg';
import styles from './header.module.css';

function Header() {
  const dispatch = useDispatch();
  const isAuthorization = useSelector(
    (state: State) => state.isAuthorization.authorizationFlag
  );

  const [darkTheme, setDarkTheme] = useState(false);
  const [authorization, setAuthorization] = useState(true);

  useEffect(() => {
    const user = getData(userData.userName);
    if (user) {
      setAuthorization(true);
      dispatch(authorizationCreator(true));
    }
  });

  useEffect(() => {
    dispatch(colorThemeCreator(darkTheme));
  });

  const showAuthorizationField = () => {
    authorization ? setAuthorization(false) : setAuthorization(true);
  };

  const showUserList = (event: HTMLButtonElement['name']) => {
    const favouritedList = getData(VALUES.favouritedList) || VALUES.defaultList;
    const watchLaterList = getData(VALUES.watchLaterList) || VALUES.defaultList;

    event === VALUES.favouritedList
      ? dispatch(
          sortingByOptionsCreator(ACTIONS.FAVOURITED_LIST, favouritedList)
        )
      : dispatch(
          sortingByOptionsCreator(ACTIONS.WATCH_LATER_LIST, watchLaterList)
        );
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.header}>
          <img src={movieLabLogo} className={styles.logo} />
          <h1 className={styles.name}>
            movie<span>lab</span>
          </h1>
        </div>

        <div className={styles.navigation}>
          {isAuthorization ? (
            <button
              name={VALUES.favouritedList}
              className={styles.favourites}
              onClick={(event) => {
                showUserList(event.currentTarget.name);
              }}
            >
              <Link to="/" className={styles.text}>
                Избранное
              </Link>
            </button>
          ) : null}
          {isAuthorization ? (
            <button
              name={VALUES.watchLaterList}
              className={styles.watchLater}
              onClick={(event) => {
                showUserList(event.currentTarget.name);
              }}
            >
              <Link to="/" className={styles.text}>
                Смотреть позже
              </Link>
            </button>
          ) : null}
          <button className={styles.home}>
            <Link to="/" className={styles.text}>
              Главная
            </Link>
          </button>
          <button
            type="button"
            className={styles.entrance}
            onClick={() => {
              if (isAuthorization) {
                localStorage.removeItem(userData.userName);
                dispatch(authorizationCreator(false));
              } else {
                showAuthorizationField();
              }
            }}
          >
            {isAuthorization ? 'Выйти' : 'Войти'}
          </button>
          <img
            src={darkTheme ? moon : sun}
            className={styles.themeIcon}
            alt="Theme"
            onClick={() => {
              darkTheme ? setDarkTheme(false) : setDarkTheme(true);
            }}
          />
        </div>
      </div>
      <Authorization isOpen={authorization} setIsOpen={setAuthorization} />
    </div>
  );
}

export { Header };
