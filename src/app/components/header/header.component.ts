import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public transServ: TranslateService) {}

  translate(event: any) {
    this.transServ.use(event.target.value);
    sessionStorage.setItem('lang', event.target.value);
    window.location.reload();
  }
}
