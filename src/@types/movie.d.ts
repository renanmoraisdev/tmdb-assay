export interface IDates {
  maximum?: string;
  minimum?: string;
}

export interface IMovie {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: string[];
  id?: integer;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: integer;
  video?: boolean;
  vote_average?: number;
}

export interface IGenre {
  id?: integer;
  name?: string;
}

export interface IMovieResponse {
  page?: integer;
  results?: IMovie[];
  dates?: IDates;
  total_pages?: integer;
  total_pages?: integer;
}

export interface IGenreResponse {
  genres?: IGenre[];
}
