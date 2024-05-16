import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  reviews,
  showCridets,
  showImages,
  tvShows,
  tvVideo,
} from '../../models/tv';
import { TvServiceService } from '../../services/tv.service.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-tvshowsdetails',
  templateUrl: './tvshowsdetails.component.html',
  styleUrl: './tvshowsdetails.component.css',
})
export class TvshowsdetailsComponent implements OnInit {
  show: tvShows | null = null;
  similarShows: tvShows[] = [];
  showVideos: tvVideo[] = [];
  showReviews: reviews[] = [];
  showImages: showImages | null = null;
  showCast: showCridets | null = null;
  similarId: number | null = null;
  imagesSizes = IMAGES_SIZES;
  lang: string | null = sessionStorage.getItem('lang');
  constructor(
    private route: ActivatedRoute,
    private showServ: TvServiceService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      let idNumber = Number(id);
      this.similarId = idNumber;
      this.getShowById(idNumber);
      this.getShowVideos(idNumber);
      this.getShowImages(idNumber);
      this.getShowCast(idNumber);
      this.getShowSimilar(idNumber, 1);
      this.getShowReviews(idNumber);
    });
  }
  // ========================================< get show by id >===========================================
  getShowById(id: number) {
    this.showServ.getTvShowsById(id).subscribe((res) => {
      this.show = res;
    });
  }
  // ========================================< get show videos >========================================
  getShowVideos(id: number) {
    this.showServ.getTvShowsVideos(id).subscribe((res) => {
      this.showVideos = res;
    });
  }
  // ========================================< get show images >========================================
  getShowImages(id: number) {
    this.showServ.getTvShowImages(id).subscribe((res) => {
      this.showImages = res;
    });
  }
  // ========================================< get show cast >========================================
  getShowCast(id: number) {
    this.showServ.getTvShowCast(id).subscribe((res) => {
      this.showCast = res;
    });
  }
  // ========================================< get show reviews>=====================================
  getShowReviews(id: number) {
    this.showServ.getShowReviews(id).subscribe((res) => {
      this.showReviews = res;
    });
  }
  // ========================================< get show similar shows >===============================
  getShowSimilar(id: number, page: number) {
    this.showServ.getShowSimilarShows(id, page).subscribe((res) => {
      this.similarShows = res;
    });
  }

  onPageChange(event: any) {
    const pageNumber = event.page + 1;
    if (this.similarId) {
      this.getShowSimilar(this.similarId, pageNumber);
    }
  }
}
