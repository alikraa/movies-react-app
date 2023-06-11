import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/header/header';
import { State } from './ts/interfaces';
import { VALUES, getData } from './ts/view';
import { colorThemeCreator } from './store/actions';
import styles from './app.module.css';

function App() {
  const dispatch = useDispatch();
  const colorTheme = useSelector((state: State) => state.colorTheme.darkTheme);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const theme = getData(VALUES.darkTheme);
    if (theme) {
      setDarkTheme(theme);
      dispatch(colorThemeCreator(theme));
    }
  }, [dispatch]);

  return (
    <div
      className={`${styles.wrap} ${
        colorTheme ? styles.wrap__darkTheme : styles.wrap__lightTheme
      }`}
    >
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Outlet />
    </div>
  );
}

export { App };
