import './header.css';

function Header() {
  return (
    <div className="movies-app__header">
      <div className="header__content">
        <h1 className="header">
          <a href="/home">Home</a>
        </h1>
        <button type="submit" className="header__button">
          Login
        </button>
      </div>
    </div>
  );
}

export { Header };
