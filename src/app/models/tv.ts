export interface tvShows {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  popularity: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  original_language: string;
  backdrop_path: string;
  first_air_date: string;
}
export interface tvDto {
  page: number;
  results: tvShows[];
  total_results: number;
  total_pages: number;
}
