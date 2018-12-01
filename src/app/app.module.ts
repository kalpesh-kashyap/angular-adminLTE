import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RoutersModule} from './routers.module';
import {UsersListComponent} from './users/users-list/users-list.component';
import {LoginComponent} from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutersModule,
    LayoutsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
