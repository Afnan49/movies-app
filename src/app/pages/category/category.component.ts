import { Component, OnInit } from '@angular/core';
import { genre } from '../../models/movies';
import { MoviesService } from '../../services/movies.service';
import { TvServiceService } from '../../services/tv.service.service';
import { genres } from '../../models/tv';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  genres: genre[] = [];
  tvGenres: genres[] = [];
  constructor(
    private moviesServ: MoviesService,
    private tvServ: TvServiceService
  ) {}
  ngOnInit(): void {
    this.moviesServ.getMovieGenres().subscribe((res) => {
      this.genres = res;
    });
    this.tvServ.getTvGenres().subscribe((res) => {
      this.tvGenres = res;
    });
  }
}
