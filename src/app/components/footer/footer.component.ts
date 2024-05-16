import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  date: Date = new Date();
  constructor(private tranServ: TranslateService) {}
  translate(event: any) {
    this.tranServ.use(event.target.value);
  }
}
