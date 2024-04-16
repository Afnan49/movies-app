import { Component, Input } from '@angular/core';
import { Movies } from '../../models/movies';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input() movie: Movies | null = null;
  imagesSize = IMAGES_SIZES;
}
