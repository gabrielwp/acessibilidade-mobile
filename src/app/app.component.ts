import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showDialog = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
    translate.use('pt');
  }

  clickBotao() {
    this.showDialog = true;
  }

  redirect() {
    window.location.href = `https://www.w3.org/WAI/ARIA/apg/patterns/`;
  }
}
