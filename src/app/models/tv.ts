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
  last_air_date: string;
  number_of_seasons: number;
  number_of_episodes: number;
  seasons: seasons[];
  status: string;
  genres: genres[];
}
export interface tvDto {
  page: number;
  results: tvShows[];
  total_results: number;
  total_pages: number;
}
export interface seasons {
  id: number;
  name: string;
  episode_count: number;
}
export interface genres {
  id: number;
  name: string;
}
export interface tvShowVideos {
  id: number;
  results: tvVideo[];
}
export interface tvVideo {
  key: string;
  site: string;
}
export interface showImages {
  backdrops: {
    file_path: string;
  }[];
}
export interface showCridets {
  cast: {
    id: number;
    name: string;
    profile_path: string;
  }[];
}
export interface showReviews {
  page: number;
  results: reviews[];
  total_results: number;
  total_pages: number;
}
export interface reviews {
  author: string;
  author_details: {
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
}
export interface genre {
  genres: genres[];
}
