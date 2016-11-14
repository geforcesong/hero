import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    clickMessage = ''
    values = '';
    onClickMe() {
        this.clickMessage = 'You are my hero';
    }

    onKey(value: string) {
        this.values += value + ' | ';
    }

    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero: string) {
        if (newHero) {
            this.heroes.push(newHero);
        }
    }
}
