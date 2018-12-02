import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserFormComponent} from './user-form/user-form.component';
import {UsersRoutesModule} from './users.routes.module';
import {UsersListComponent} from './users-list/users-list.component';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsersListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutesModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: []
})
export class UsersModule {
}
