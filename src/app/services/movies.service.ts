import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MovieCredits,
  MovieReviews,
  Movies,
  MoviesDto,
  MoviesDtoVideos,
  MoviesGeres,
  MoviesIMages,
} from '../models/movies';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  // ================================<properiets >======================================================
  basceUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '8c247ea0b4b56ed2ff7d41c9a833aa77';
  lang: string | null = sessionStorage.getItem('lang');
  localLang: string = this.lang === 'ar' ? 'ar-BH' : 'en-US';
  constructor(private http: HttpClient) {}
  // ================================<get all movies >===================================================
  getMovies(type: string, count: number = 12) {
    return this.http
      .get<MoviesDto>(
        `${this.basceUrl}movie/${type}?Language=${this.localLang}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
  // ================================<get movie by id >===================================================
  getMovieById(id: number) {
    return this.http.get<Movies>(
      `${this.basceUrl}movie/${id}?Language=${this.localLang}&api_key=${this.apiKey}`
    );
  }
  // ================================<get all movies videos >=============================================
  getMoviesVideos(id: number) {
    return this.http
      .get<MoviesDtoVideos>(
        `${this.basceUrl}movie/${id}/videos?Language=${this.localLang}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  // ================================<get all movies photos >===========================================
  getMovieImages(id: number) {
    return this.http.get<MoviesIMages>(
      `${this.basceUrl}movie/${id}/images?Language=${this.localLang}&api_key=${this.apiKey}`
    );
  }
  // ================================<get all movies credits >===========================================
  getMovieCredits(id: number) {
    return this.http.get<MovieCredits>(
      `${this.basceUrl}movie/${id}/credits?Language=${this.localLang}&api_key=${this.apiKey}`
    );
  }
  // ================================<get all movies similar >===========================================
  getMovieSimilar(id: number, page: number) {
    return this.http
      .get<MoviesDto>(
        `${this.basceUrl}movie/${id}/similar?Language=${this.localLang}&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  // ================================<get all movie reviews >==========================================
  getMovieReviews(id: number) {
    return this.http
      .get<MovieReviews>(
        `${this.basceUrl}movie/${id}/reviews?Language=${this.localLang}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  // ================================<pagination>======================================================
  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/movie' : 'movie/popular';
    return this.http
      .get<MoviesDto>(
        `${this.basceUrl}${uri}?Language=${this.localLang}&page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  // ================================<get genres list  >===========================================
  getMovieGenres() {
    return this.http
      .get<MoviesGeres>(
        `${this.basceUrl}genre/movie/list?Language=${this.localLang}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }
  // ================================<get movies By Genres >===========================================
  getMoviesByGenres(id: number, page: number) {
    return this.http
      .get<MoviesDto>(
        `${this.basceUrl}discover/movie?Language=${this.localLang}&with_genres=${id}&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
