import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    // AppComponent,
    HomeComponent,
    FirstComponent,
    SecondComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //bootstrap: [AppComponent] 
})
export class AppModule { }