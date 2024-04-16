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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
