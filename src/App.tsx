import { useSelector } from 'react-redux';
import { Header } from './components/header/header';
import { State } from './ts/interfaces';
import { Outlet } from 'react-router-dom';
import styles from './app.module.css';

function App() {
  const colorTheme = useSelector((state: State) => state.colorTheme.darkTheme);

  return (
    <div
      className={`${styles.wrap} ${
        colorTheme ? styles.wrap__darkTheme : styles.wrap__lightTheme
      }`}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export { App };
