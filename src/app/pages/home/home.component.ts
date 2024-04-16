import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  popularMovies: Movies[] = [];
  upComingrMovies: Movies[] = [];
  toRatedMovies: Movies[] = [];
  nowPlayingMovies: Movies[] = [];
  constructor(private moviesserv: MoviesService) {}
  ngOnInit(): void {
    this.moviesserv.getMovies('popular').subscribe((res) => {
      this.popularMovies = res;
    });
    this.moviesserv.getMovies('upcoming').subscribe((res) => {
      this.upComingrMovies = res;
    });
    this.moviesserv.getMovies('top_rated').subscribe((res) => {
      this.toRatedMovies = res;
    });
    this.moviesserv.getMovies('now_playing').subscribe((res) => {
      this.nowPlayingMovies = res;
    });
  }
}
