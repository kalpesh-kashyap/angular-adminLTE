import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserFormComponent} from './user-form/user-form.component';
import {UsersRoutesModule} from './users.routes.module';
import {UsersListComponent} from './users-list/users-list.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutesModule
  ],
  exports: []
})
export class UsersModule {
}
