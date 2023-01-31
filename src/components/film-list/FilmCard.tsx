import filmCover from '../../assets/img/film-card-template.png';
import starIcon from '../../assets/img/star-icon.svg';
import bookmarkIcon from '../../assets/img/bookmark-icon.svg';

function FilmCard() {
  return (
    <div className="movies-app__film-card-wrapper">
      <img src={filmCover} alt="Movie Cover" className="film-card__cover" />
      <div className="film-card__info">
        <div className="info__header">
          <p className="info__header-rating">Рейтинг: 8.4</p>
          <img src={starIcon} alt="" className="info__header-star" />
          <img src={bookmarkIcon} alt="" className="info__header-bookmark" />
        </div>
        <h3 className="info__film-name">
          Истребитель демонов: Поезд "Бесконечный"
        </h3>
        <button className="info__button-more">
          <a href="/more">Подробнее</a>
        </button>
      </div>
    </div>
  );
}

export { FilmCard };
