import { Component, Input } from '@angular/core';
import { Movies } from '../../models/movies';
import { tvShows } from '../../models/tv';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrl: './items-banner.component.css',
})
export class ItemsBannerComponent {
  @Input() movie: Movies[] = [];
  @Input() tvShows: tvShows[] = [];
  @Input() title: string = '';
}
