import { Component } from '@angular/core';

import { EnvoyRepository } from './store/envoy.repository';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTest';
  name$ = this.envoyRepository.name$;

  constructor(private envoyRepository: EnvoyRepository) {
  }

  buttonClicked() {
    this.envoyRepository.updateName('hamud');
  }
}
