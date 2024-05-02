import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = [];
  genreId: number | null = null;
  searchValue: string | null = null;
  constructor(
    private moviesServ: MoviesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id) {
        let idNumber = Number(id);
        this.genreId = idNumber;
        this.getMoviesByGenres(idNumber, 1);
      } else {
        this.gitPageMovies(1);
      }
    });
  }
  // ================================<get All movies >===========================================
  gitPageMovies(page: number, searchKey?: string) {
    this.moviesServ.searchMovies(page, searchKey).subscribe((res) => {
      this.movies = res;
    });
  }
  // ================================<get movies ByGenres >===========================================
  getMoviesByGenres(id: number, page: number) {
    this.moviesServ.getMoviesByGenres(id, page).subscribe((res) => {
      this.movies = res;
      // console.log(this.movies);
    });
  }
  // ================================<get movies by pages >===========================================
  onPageChange(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenres(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.gitPageMovies(pageNumber, this.searchValue);
      } else {
        this.gitPageMovies(pageNumber);
      }
    }
  }
  // ================================<search for movies >===========================================
  searchInput() {
    if (this.searchValue) {
      this.gitPageMovies(1, this.searchValue);
    }
  }
}
