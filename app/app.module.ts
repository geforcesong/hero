import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeroDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
