import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-second',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
