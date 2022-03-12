import { Component, VERSION } from '@angular/core';
import { Location } from '../data/location';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Idle Space';
  location: Location = {
    name: 'Copper',
    income: 1,
    level: 1,
    productionProgress: 0,
    productionSpeed: 1,
    productionTarget: 100
  }
}
