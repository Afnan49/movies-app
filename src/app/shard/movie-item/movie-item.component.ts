import { Component, Input } from '@angular/core';
import { Movies } from '../../models/movies';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { tvShows } from '../../models/tv';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input() movie: Movies | null = null;
  @Input() tvShows: tvShows | null = null;
  imagesSize = IMAGES_SIZES;
}
