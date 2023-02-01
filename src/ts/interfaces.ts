interface InputCheckboxProps {
  id: number;
  value: string;
  select: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FilmCardProps {
  filmCover: string;
  rating: number;
  filmName: string;
}

interface FilmData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface FilmsListProps {}

interface FiltersProps {}

interface PageActions {
  type: string;
  pageNumber: number;
}

interface SortingActions {
  type: string;
  payload: FilmData[];
}

interface GenreActions {
  type: string;
  genres: number | number[];
}

interface ReleaseYearAction {
  type: string;
  year: string;
}

interface State {
  moviesList: FilmData[];
  pageNumber: {
    firstPageNumber: number;
    lastPageNumber: number;
  };
  releaseYear: string;
  genres: number[];
}

export type {
  InputCheckboxProps,
  FilmCardProps,
  FilmData,
  PageActions,
  State,
  SortingActions,
  ReleaseYearAction,
  GenreActions,
  FilmsListProps,
  FiltersProps,
};
