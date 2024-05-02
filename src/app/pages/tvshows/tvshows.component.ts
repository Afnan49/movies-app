import { Component, OnInit } from '@angular/core';
import { tvShows } from '../../models/tv';
import { TvServiceService } from '../../services/tv.service.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.css',
})
export class TvshowsComponent implements OnInit {
  airingTodayTvShows: tvShows[] = [];
  onTheAirTvShows: tvShows[] = [];
  popularTvShows: tvShows[] = [];
  topRatedTvShows: tvShows[] = [];
  constructor(private tvServ: TvServiceService) {}
  // =================================<get all tv shows >============================================
  ngOnInit(): void {
    this.tvServ.getTvShows('popular').subscribe((res) => {
      this.popularTvShows = res;
    });
    this.tvServ.getTvShows('airing_today').subscribe((res) => {
      this.airingTodayTvShows = res;
    });
    this.tvServ.getTvShows('on_the_air').subscribe((res) => {
      this.onTheAirTvShows = res;
    });
    this.tvServ.getTvShows('top_rated').subscribe((res) => {
      this.topRatedTvShows = res;
    });
  }
}
