import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(public translate: TranslateService) {
  //   translate.addLangs(['en', 'ch', 'zh']);
  //   translate.setDefaultLang('en');

  //   const browserLang:any = translate.getBrowserLang();
  //   translate.use(browserLang.match(/en|ch|zh/) ? browserLang : 'en');
  // }

  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  title = 'my-app';
  home = '首頁';
  firstPage = '網站地圖';
  secondPage = '聯絡我們';
}