import { useSelector } from 'react-redux';
import { Header } from './components/header/header';
import { AppContent } from './components/app-content/app-content';
import { State } from './ts/interfaces';
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
      <AppContent />
    </div>
  );
}

export { App };
