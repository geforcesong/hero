import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    constructor(private http: Http){

    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get("app/api.json").toPromise().then(
            response => response.json() as Hero[]
            );
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

}
