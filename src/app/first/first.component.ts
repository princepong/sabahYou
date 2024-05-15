import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-first',
  //standalone: true,
  //imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
