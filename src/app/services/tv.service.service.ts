import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tvDto } from '../models/tv';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvServiceService {
  // ================================<properiets >======================================================
  basceUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '8c247ea0b4b56ed2ff7d41c9a833aa77';

  constructor(private http: HttpClient) {}
  // ====================================< get all tv shows >==========================================
  getTvShows(type: string, count: number = 12) {
    return this.http
      .get<tvDto>(`${this.basceUrl}tv/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
}
