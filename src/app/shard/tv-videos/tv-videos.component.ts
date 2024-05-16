import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tv-videos',
  templateUrl: './tv-videos.component.html',
  styleUrl: './tv-videos.component.css',
})
export class TvVideosComponent implements OnInit {
  @Input() site: string = 'youtube';
  @Input() key: string | null = null;
  safeUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
        this.safeUrl = this.getSafeUrl(
          'https://www.youtube.com/embed/' + this.key
        );
        break;
      case 'Vimeo':
        this.safeUrl = this.getSafeUrl(
          'https://www.Vimeo.com/embed/' + this.key
        );
    }
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
