import { Header } from './components/header/Header';
import { AppContent } from './components/app-content/AppContent';
import './App.css';

function App() {
  return (
    <div className="movies-app__wrapper">
      <Header />
      <AppContent />
    </div>
  );
}

export { App };
