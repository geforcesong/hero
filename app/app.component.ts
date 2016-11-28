import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from './hero';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: [`
    .red{
      color: red;
    }
    .big{
      font-size:30px;
    }
  `]
})
export class AppComponent {
  HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  isUnchanged: Boolean = true;
  classes: string[] = ["red", "big"];
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  isSpecial = true;
  onSave(e): void {
    alert(e);
  }
  @Output() sizeChange = new EventEmitter<number>();
  size = 1;
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
    this.currentHero.firstName += "1";
  }
  onChange(): void {
    alert("change")
  }

  currentHero = {
    firstName: 'George'
  }
}
