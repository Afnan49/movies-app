import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import { CategoryComponent } from './pages/category/category.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { TvshowsdetailsComponent } from './pages/tvshowsdetails/tvshowsdetails.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/Genres/:id', component: MoviesComponent },
  { path: 'moviedetails/:id', component: MoviedetailsComponent },
  { path: 'tvshowsdetails/:id', component: TvshowsdetailsComponent },
  { path: 'Genres', component: CategoryComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'shows/Genres/:id', component: ShowsComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
