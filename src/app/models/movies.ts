export interface Movies {
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
  revenue: number;
  runtime: number;
  status: string;
  genres: genre[];
}
export interface MoviesDto {
  page: number;
  results: Movies[];
  total_results: number;
  total_pages: number;
}
export interface genre {
  id: number;
  name: string;
}
export interface MoviesDtoVideos {
  id: number;
  results: movieVideo[];
}
export interface movieVideo {
  key: string;
  site: string;
}
export interface MoviesIMages {
  backdrops: {
    file_path: string;
  }[];
}
export interface MovieCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}
export interface MoviesGeres {
  genres: genre[];
}
export interface genre {
  id: number;
  name: string;
}
