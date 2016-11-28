import { Component, Input } from '@angular/core';
import { Hero } from './hero'

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="CurrentHero">
        <span class="badge">{{CurrentHero.id}}</span> {{CurrentHero.name}}
    </div>
    <div *ngIf="!CurrentHero">
        There is no hero being set.
    </div>
  `
})
export class HeroDetailComponent {
    @Input()
    CurrentHero:Hero;
}
