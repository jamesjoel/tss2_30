import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SocialFooterComponent } from './shared/social-footer/social-footer.component';
import { SliderComponent } from './shared/slider/slider.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TopHeaderComponent,
    HeaderComponent,
    FooterComponent,
    SocialFooterComponent,
    SliderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
