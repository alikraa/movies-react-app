interface HeaderProps {
  darkTheme: boolean;
  setDarkTheme: (value: boolean) => void;
}

interface InputCheckboxProps {
  id: number;
  value: string;
  select: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FilmCardProps {
  item: FilmData;
  filmCover: string;
  rating: number;
  filmName: string;
  filmId: number | number[];
}

interface FilmData {
  adult: boolean;
  backdrop_path: string | null;
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
  isAuthorization: {
    authorizationFlag: boolean;
  };
  colorTheme: {
    darkTheme: boolean;
  };
}

interface AuthorizationAction {
  type: string;
  flag: boolean;
}

interface AuthorizationProps {
  isOpen: boolean;
  setIsOpen: (hidden: boolean) => void;
}

interface ColorThemeAction {
  type: string;
  payload: false;
}

export type {
  HeaderProps,
  InputCheckboxProps,
  FilmCardProps,
  FilmData,
  PageActions,
  State,
  SortingActions,
  ReleaseYearAction,
  GenreActions,
  AuthorizationAction,
  AuthorizationProps,
  ColorThemeAction,
};
