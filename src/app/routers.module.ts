import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './auth/login/login.component';
import {LayoutsComponent} from './layouts/layouts.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '', component: LayoutsComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', loadChildren: './users/users.module#UsersModule'}
    ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutersModule {

}
