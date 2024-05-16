import { Component, Input } from '@angular/core';
import { tvShows } from '../../models/tv';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-showslider',
  templateUrl: './showslider.component.html',
  styleUrl: './showslider.component.css',
})
export class ShowsliderComponent {
  @Input() tvShow: tvShows[] = [];
  curentIndex: number = 0;
  imagesSize = IMAGES_SIZES;
  lang: string | null = sessionStorage.getItem('lang');
}
