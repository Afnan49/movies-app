import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesDto } from '../models/movies';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  basceUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '8c247ea0b4b56ed2ff7d41c9a833aa77';
  constructor(private http: HttpClient) {}
  getMovies(type: string, count: number = 12) {
    return this.http
      .get<MoviesDto>(`${this.basceUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
  searchMovies(page: number) {
    return this.http
      .get<MoviesDto>(
        `${this.basceUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
