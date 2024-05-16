import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
export class SliderComponent implements OnInit, OnDestroy {
  imagesSize = IMAGES_SIZES;
  @Input() items: Movies[] = [];
  @Input() isBanner: boolean = false;
  curentIndex: number = 0;
  lang: string | null = sessionStorage.getItem('lang');
  private interval: any;
  ngOnInit(): void {
    if (!this.isBanner) {
      const storedIndex = localStorage.getItem('index');
      this.curentIndex = storedIndex ? parseInt(storedIndex, 10) : 0;
      this.setInterval();
    }
  }
  setInterval() {
    this.interval = setInterval(() => {
      this.curentIndex = (this.curentIndex + 1) % this.items.length;
      localStorage.setItem('index', this.curentIndex.toString());
    }, 5000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
