import { Component, OnInit } from '@angular/core';
import { TvServiceService } from '../../services/tv.service.service';
import { tvShows } from '../../models/tv';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.css',
})
export class ShowsComponent implements OnInit {
  tvShows: tvShows[] = [];
  searchValue: string | null = null;
  showId: number | null = null;

  constructor(
    private tvServ: TvServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id) {
        const idNumer = Number(id);
        this.showId = idNumer;
        this.getMoviesByGenres(idNumer, 1);
      } else {
        this.getPageTvShows(1);
      }
    });
  }

  // ==================================< get tvshows by pages >==========================================
  getPageTvShows(page: number, searchKeyword?: string) {
    this.tvServ.searchTvShows(page, searchKeyword).subscribe((res) => {
      this.tvShows = res;
    });
  }
  // ==================================< get tvshows by genres >======================================
  getMoviesByGenres(id: number, page: number) {
    this.tvServ.getShowsByGenres(id, page).subscribe((res) => {
      this.tvShows = res;
    });
  }
  // ==================================< search show >=================================================
  searchChange() {
    if (this.searchValue) {
      this.getPageTvShows(1, this.searchValue);
    }
  }
  // ==================================< pagination >=================================================
  onPageChange(event: any) {
    if (this.showId) {
      this.getMoviesByGenres(this.showId, event.page + 1);
    } else {
      if (this.searchValue) {
        this.getPageTvShows(event.page + 1, this.searchValue);
      } else {
        this.getPageTvShows(event.page + 1);
      }
    }
  }
}
