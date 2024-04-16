import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = [];
  constructor(private moviesServ: MoviesService) {}
  ngOnInit(): void {
    this.gitPageMovies(1);
  }

  gitPageMovies(page: number) {
    this.moviesServ.searchMovies(page).subscribe((res) => {
      this.movies = res;
    });
  }

  onPageChange(event: any) {
    // console.log(event);
    this.gitPageMovies(event.page + 1);
  }
}
