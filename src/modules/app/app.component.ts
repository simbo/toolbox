import { Component } from '@angular/core';

@Component({
  selector: 'c-app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public siteTitle = 'Toolbox';

  constructor() {
    console.log('Hello World!');
  }

}
