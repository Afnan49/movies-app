import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../models/movies';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { tvShows } from '../../models/tv';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  animations: [
    trigger('slidFade', [
      state('void', style({ opacity: 0 })),
      transition('void=>*', [animate('1s')]),
      transition('*=>void', [animate('500ms')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  imagesSize = IMAGES_SIZES;
  @Input() items: Movies[] = [];
  @Input() tvShows: tvShows[] = [];
  curentIndex: number = 0;
  ngOnInit(): void {
    //   setTimeout(() => {
    //     console.log('hello');
    //     this.setInterval;
    //   }, 5000);
    // }
    // setInterval = setInterval(() => {
    //   console.log('wolcom');
    //   console.log(this.curentIndex);
    //   this.curentIndex = this.curentIndex++;
    // }, 5000);
  }
}
