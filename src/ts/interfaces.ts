interface Pages {
  pageNumber: number;
  setPageNumber: (page: number) => void;
}

interface FilmCardProps {
  filmCover: string;
  rating: number;
  filmName: string;
}

export type { Pages, FilmCardProps };
