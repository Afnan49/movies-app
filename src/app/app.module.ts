import { NgModule, APP_INITIALIZER } from '@angular/core';
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
import { ShowsComponent } from './pages/shows/shows.component';
import { TvshowsdetailsComponent } from './pages/tvshowsdetails/tvshowsdetails.component';
import { TvVideosComponent } from './shard/tv-videos/tv-videos.component';
import { ShowsliderComponent } from './shard/showslider/showslider.component';
import { ProgressBarModule } from 'primeng/progressbar';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
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

    ShowsComponent,
    TvshowsdetailsComponent,
    TvVideosComponent,
    ShowsliderComponent,
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
    ProgressBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
