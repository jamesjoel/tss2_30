import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FileTypeCategoryComponent } from './pages/file-type-category/file-type-category.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AddFileTypeComponent } from './pages/add-file-type/add-file-type.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    FileTypeCategoryComponent,
    HeaderComponent,
    FooterComponent,
    AddFileTypeComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
