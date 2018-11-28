import {Component} from '@angular/core';

@Component({
  selector: 'app-layouts',
  template: `
    <div class="wrapper">
      <app-header></app-header>
      <app-sidebar></app-sidebar>
      <ng-content select=".content-wrapper"></ng-content>
      <app-footer></app-footer>
    </div>`
})

export class LayoutsComponent {

}
