import { Component } from '@angular/core';
import { Results } from './results';

@Component({
  selector: 'my-app',
  directives: [Results],
  templateUrl: 'main.html'
})
export class AppComponent { }
