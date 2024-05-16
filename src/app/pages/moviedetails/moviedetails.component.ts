import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import {
  MovieCredits,
  Movies,
  MoviesDtoVideos,
  MoviesIMages,
  movieVideo,
  reviews,
} from '../../models/movies';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css',
})
export class MoviedetailsComponent implements OnInit {
  similarMovies: Movies[] = [];
  movies: Movies | null = null;
  movieVideos: movieVideo[] = [];
  movieReviews: reviews[] = [];
  movieImages: MoviesIMages | null = null;
  movieActors: MovieCredits | null = null;
  imageSizes = IMAGES_SIZES;
  similarId: number | null = null;
  lang: string | null = sessionStorage.getItem('lang');
  constructor(
    private route: ActivatedRoute,
    private movieServ: MoviesService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      let idNumber = Number(id);
      this.similarId = idNumber;
      this.getMovieDetail(idNumber);
      this.getMovieVideos(idNumber);
      this.getMovieImages(idNumber);
      this.getMovieActors(idNumber);
      this.getMovieSImilar(idNumber, 1);
      this.getMovieReviews(idNumber);
      // console.log(id);
    });
  }
  // ====================================< get movie details >===============================================
  getMovieDetail(id: number) {
    this.movieServ.getMovieById(id).subscribe((res) => {
      this.movies = res;
      // console.log(this.movie);
    });
  }
  // ====================================< get movie videos >===============================================
  getMovieVideos(id: number) {
    this.movieServ.getMoviesVideos(id).subscribe((res) => {
      this.movieVideos = res;
      // console.log(this.movieVideos);
    });
  }
  // ====================================< get movie images >===============================================
  getMovieImages(id: number) {
    this.movieServ.getMovieImages(id).subscribe((res) => {
      this.movieImages = res;
      // console.log(this.movieImages);
    });
  }
  // ====================================< get movie actors >===============================================
  getMovieActors(id: number) {
    this.movieServ.getMovieCredits(id).subscribe((res) => {
      this.movieActors = res;
      // console.log(this.movieActors);
    });
  }
  // ====================================< get movie similar >===============================================
  getMovieSImilar(id: number, page: number) {
    this.movieServ.getMovieSimilar(id, page).subscribe((res) => {
      this.similarMovies = res;
    });
  }
  onPageChange(event: any) {
    const pagenumber = event.page + 1;
    if (this.similarId) {
      this.getMovieSImilar(this.similarId, pagenumber);
    }
  }
  // ====================================< get movie reviews >===============================================
  getMovieReviews(id: number) {
    this.movieServ.getMovieReviews(id).subscribe((res) => {
      this.movieReviews = res;
    });
  }
}
