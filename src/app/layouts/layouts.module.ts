import {NgModule} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {LayoutsComponent} from './layouts.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LayoutsComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    LayoutsComponent
  ]
})

export class LayoutsModule {
}
