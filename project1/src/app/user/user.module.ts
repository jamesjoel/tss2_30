import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { HeaderComponent } from './shared/header/header.component';
import { RequestBoxComponent } from './shared/request-box/request-box.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FileInfoComponent } from './shared/file-info/file-info.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TopHeaderComponent,
    HeaderComponent,
    RequestBoxComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    FileInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
