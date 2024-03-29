import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ACTIONS,
  authorizationCreator,
  colorThemeCreator,
  sortingByOptionsCreator,
} from '../../store/actions';
import { HeaderProps, State } from '../../ts/interfaces';
import { Authorization } from '../authorization/authorization';
import {
  getData, setData, userData, VALUES,
} from '../../ts/view';
import sun from '../../assets/img/sun-icon.svg';
import moon from '../../assets/img/moon-icon.svg';
import movieLabLogo from '../../assets/img/movie-icon.svg';
import styles from './header.module.css';

function Header({ darkTheme, setDarkTheme }: HeaderProps) {
  const dispatch = useDispatch();
  const isAuthorization = useSelector(
    (state: State) => state.isAuthorization.authorizationFlag,
  );

  const [authorization, setAuthorization] = useState(true);

  useEffect(() => {
    const user = getData(userData.userName);
    if (user) {
      setAuthorization(true);
      dispatch(authorizationCreator(true));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(colorThemeCreator(darkTheme));
  });

  // eslint-disable-next-line max-len
  const showAuthorizationField = () => (authorization ? setAuthorization(false) : setAuthorization(true));

  const showUserList = (event: HTMLButtonElement['name']) => {
    const favouritedList = getData(VALUES.favouritedList) || VALUES.defaultList;
    const watchLaterList = getData(VALUES.watchLaterList) || VALUES.defaultList;

    return event === VALUES.favouritedList
      ? dispatch(
        sortingByOptionsCreator(ACTIONS.FAVOURITED_LIST, favouritedList),
      )
      : dispatch(
        sortingByOptionsCreator(ACTIONS.WATCH_LATER_LIST, watchLaterList),
      );
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.header}>
          <img src={movieLabLogo} className={styles.logo} alt="MovieLab" />
          <h1 className={styles.name}>
            movie
            <span>lab</span>
          </h1>
        </div>

        <div className={styles.navigation}>
          {isAuthorization ? (
            <button
              type="button"
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
              type="button"
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
          <button type="button" className={styles.home}>
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
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-noninteractive-element-interactions */}
          <img
            src={darkTheme ? moon : sun}
            className={styles.themeIcon}
            alt="Theme"
            onClick={() => {
              if (darkTheme) {
                setDarkTheme(false);
                setData(VALUES.darkTheme, false);
              } else {
                setDarkTheme(true);
                setData(VALUES.darkTheme, true);
              }
            }}
          />
        </div>
      </div>
      <Authorization isOpen={authorization} setIsOpen={setAuthorization} />
    </div>
  );
}

export { Header };
