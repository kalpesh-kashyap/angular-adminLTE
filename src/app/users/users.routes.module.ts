import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {UserFormComponent} from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'lists', component: UsersListComponent},
      {path: 'user-form', component: UserFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutesModule {
}
