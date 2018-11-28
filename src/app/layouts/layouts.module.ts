import {NgModule} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {LayoutsComponent} from './layouts.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LayoutsComponent,
    FooterComponent
  ],
  exports: [
    LayoutsComponent
  ],
  imports: [
    RouterModule
  ]
})

export class LayoutsModule {
}
