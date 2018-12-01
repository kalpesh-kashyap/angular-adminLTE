import {Component} from '@angular/core';

@Component({
  selector: 'app-layouts',
  template: `
    <div class="wrapper">
      <app-header></app-header>
      <app-sidebar></app-sidebar>
      <div class="content-wrapper">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>`
})

export class LayoutsComponent {

}
