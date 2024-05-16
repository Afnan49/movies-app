import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'movie-app';
  lang: string | null = null;
  constructor(private translate: TranslateService) {}
  ngOnInit(): void {
    if (
      typeof window !== 'undefined' &&
      typeof sessionStorage !== 'undefined'
    ) {
      this.lang = sessionStorage.getItem('lang') || 'en';
    } else {
      this.lang = 'en'; // default language if sessionStorage is not available
    }
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }
}
