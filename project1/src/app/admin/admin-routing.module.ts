import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AboutComponent } from './pages/about/about.component';
import { AddFileTypeComponent } from './pages/add-file-type/add-file-type.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FileTypeCategoryComponent } from './pages/file-type-category/file-type-category.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { StudentComponent } from './pages/student/student.component';
import { UsersComponent } from './pages/users/users.component';



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
        path : "file-type",
        component : FileTypeCategoryComponent
      },
      {
        path : "add-file-type",
        component : AddFileTypeComponent
      },
      {
        path : "edit-file-type/:id",
        component : AddFileTypeComponent
      },
      {
        path : "users",
        component : UsersComponent
      },
      {
        path : "student",
        component : StudentComponent
      },
      {
        path : "about",
        component : AboutComponent
      },
      {
        path : "products",
        component : ProductsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
