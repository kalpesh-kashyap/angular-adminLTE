import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RoutersModule} from './routers.module';
import {LoginComponent} from './auth/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutersModule,
    LayoutsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
