import { Component, OnInit } from '@angular/core';
import { genre } from '../../models/movies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  genres: genre[] = [];
  constructor(private moviesServ: MoviesService) {}
  ngOnInit(): void {
    this.moviesServ.getMovieGenres().subscribe((res) => {
      this.genres = res;
      // console.log(this.genres);
    });
  }
}
