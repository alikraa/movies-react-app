import { Header } from './components/header/header';
import { AppContent } from './components/app-content/app-content';
import './app.css';

function App() {
  return (
    <div className="movies-app__wrapper">
      <Header />
      <AppContent />
    </div>
  );
}

export { App };
