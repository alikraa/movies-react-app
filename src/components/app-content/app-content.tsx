import { Filters } from '../filters/filters';
import { FilmsList } from '../film-list/film-list';
import styles from "./app-content.module.css"

function AppContent() {
  return (
    <div className={styles.content}>
      <Filters />
      <FilmsList />
    </div>
  );
}

export { AppContent };
