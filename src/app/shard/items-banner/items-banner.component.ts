import { Component, Input } from '@angular/core';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrl: './items-banner.component.css',
})
export class ItemsBannerComponent {
  @Input() movie: Movies[] = [];
  @Input() title: string = '';
}
