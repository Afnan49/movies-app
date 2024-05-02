import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './shard/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './shard/items-banner/items-banner.component';
import { MovieItemComponent } from './shard/movie-item/movie-item.component';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import { MovieVideosComponent } from './shard/movie-videos/movie-videos.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { CategoryComponent } from './pages/category/category.component';
import { InputTextModule } from 'primeng/inputtext';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    NotfoundComponent,
    SliderComponent,
    ItemsBannerComponent,
    MovieItemComponent,
    MoviedetailsComponent,
    MovieVideosComponent,
    CategoryComponent,
    TvshowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
