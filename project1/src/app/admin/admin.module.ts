import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FileTypeCategoryComponent } from './pages/file-type-category/file-type-category.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AddFileTypeComponent } from './pages/add-file-type/add-file-type.component';
import { UsersComponent } from './pages/users/users.component';
import { StudentComponent } from './pages/student/student.component';
import { DiscountPipe } from './pipe/discount.pipe';
import { AboutComponent } from './pages/about/about.component';
import { Box1Component } from './shared/box1/box1.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductBoxComponent } from './shared/product-box/product-box.component';
import { SortTitlePipe } from './pipe/sort-title.pipe';
import { ContactComponent } from './pages/contact/contact.component';
import { Box2Component } from './shared/box2/box2.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { StatecityComponent } from './pages/statecity/statecity.component';
import { MydirDirective } from './directives/mydir.directive';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    FileTypeCategoryComponent,
    HeaderComponent,
    FooterComponent,
    AddFileTypeComponent,
    UsersComponent,
    StudentComponent,
    DiscountPipe,
    AboutComponent,
    Box1Component,
    ProductsComponent,
    ProductBoxComponent,
    SortTitlePipe,
    ContactComponent,
    Box2Component,
    MyCartComponent,
    StatecityComponent,
    MydirDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
