import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {UsersListComponent} from './users/users-list/users-list.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'users', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutersModule {

}
