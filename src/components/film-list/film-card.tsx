import { FilmCardProps } from '../../ts/interfaces';
import filmIcon from '../../assets/img/film-icon.svg';
import starIcon from '../../assets/img/star-icon.svg';
import bookmarkIcon from '../../assets/img/bookmark-icon.svg';

function FilmCard({ filmCover, rating, filmName }: FilmCardProps) {
  return (
    <div className="movies-app__film-card-wrapper">
      <div className="film-card__cover">
        <img src={filmCover ?? filmIcon} alt="Movie Cover" className="cover" />
      </div>
      <div className="film-card__info">
        <div className="info__header">
          <p className="info__header-rating">Рейтинг: {rating ?? '8.4'}</p>
          <img src={starIcon} alt="" className="info__header-star" />
          <img src={bookmarkIcon} alt="" className="info__header-bookmark" />
        </div>
        <h3 className="info__film-name">
          {filmName ?? 'Истребитель демонов: Поезд "Бесконечный"'}
        </h3>
        <button className="info__button-more">
          <a href="/more">Подробнее</a>
        </button>
      </div>
    </div>
  );
}

export { FilmCard };
