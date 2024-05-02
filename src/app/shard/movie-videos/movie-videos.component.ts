import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrl: './movie-videos.component.css',
})
export class MovieVideosComponent implements OnInit {
  @Input() site: string = 'youtube';
  @Input() key: string | null = null;
  url: SafeResourceUrl = '';
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
        this.url = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
        break;
      case 'Vimeo':
        this.url = this.getSafeUrl('https://www.vimeo.com/embed/' + this.key);
        break;
    }
  }
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
