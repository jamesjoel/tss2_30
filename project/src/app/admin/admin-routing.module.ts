import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccessComponent } from './pages/access/access.component';
import { CategoryComponent } from './pages/category/category.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : LoginComponent
      },
      {
        path : "dashboard",
        component : DashboardComponent
      },
      {
        path : "access",
        component : AccessComponent
      },
      {
        path : "category",
        component : CategoryComponent
      },
      {
        path : "users",
        component : UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
