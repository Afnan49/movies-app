import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  genre,
  showCridets,
  showImages,
  showReviews,
  tvDto,
  tvShowVideos,
  tvShows,
} from '../models/tv';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvServiceService {
  // ================================<properiets >======================================================
  basceUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '8c247ea0b4b56ed2ff7d41c9a833aa77';
  lang: string | null = sessionStorage.getItem('lang');
  localLang: string = this.lang === 'ar' ? 'ar-BH' : 'en-Us';
  constructor(private http: HttpClient) {}
  // ====================================< get show by id >==========================================
  getTvShowsById(id: number) {
    return this.http.get<tvShows>(
      `${this.basceUrl}tv/${id}?language=${this.localLang}&api_key=${this.apiKey}`
    );
  }
  // ====================================< get show videos >==========================================
  getTvShowsVideos(id: number) {
    return this.http
      .get<tvShowVideos>(
        `${this.basceUrl}tv/${id}/videos?language=${this.localLang}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  // ====================================< get show images >==========================================
  getTvShowImages(id: number) {
    return this.http.get<showImages>(
      `${this.basceUrl}tv/${id}/images?language=${this.localLang}&api_key=${this.apiKey}`
    );
  }
  // ====================================< get show cast >============================================
  getTvShowCast(id: number) {
    return this.http.get<showCridets>(
      `${this.basceUrl}tv/${id}/credits?language=${this.localLang}&api_key=${this.apiKey}`
    );
  }
  // ====================================< get show similar shows >===================================
  getShowSimilarShows(id: number, page: number) {
    return this.http
      .get<tvDto>(
        `${this.basceUrl}tv/${id}/similar?language=${this.localLang}&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  // ====================================< get show reviews >==========================================
  getShowReviews(id: number) {
    return this.http
      .get<showReviews>(
        `${this.basceUrl}tv/${id}/reviews?language=${this.localLang}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  // ====================================< get shows genres list >======================================
  getTvGenres() {
    return this.http
      .get<genre>(
        `${this.basceUrl}genre/tv/list?language=${this.localLang}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }
  // ====================================< get shows by genres >=======================================
  getShowsByGenres(id: number, page: number) {
    return this.http
      .get<tvDto>(
        `${this.basceUrl}discover/tv?language=${this.localLang}&with_genres=${id}&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  // ====================================< paginatio >=================================================
  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/tv' : 'tv/popular';
    return this.http
      .get<tvDto>(
        `${this.basceUrl}${uri}?language=${this.localLang}&page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
