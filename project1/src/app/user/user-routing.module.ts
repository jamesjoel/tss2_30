import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';

import { BackdoorGuard } from './guards/backdoor.guard';
import { AntiBackdoorGuard } from './guards/anti-backdoor.guard';
import { MyDriveComponent } from './pages/my-drive/my-drive.component';
import { UploadToDriveComponent } from './pages/upload-to-drive/upload-to-drive.component';
const routes: Routes = [
  {
    path : "",
    component : UserComponent,
    children :[
      {
        path : "",
        component :HomeComponent
      },
      {
        path : "about",
        component : AboutComponent
      },
      {
        path : "contact",
        component : ContactComponent
      },
      {
        path : "login",
        component : LoginComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path : "signup",
        component : SignupComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path : "my-account",
        component : MyAccountComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "my-drive",
        component : MyDriveComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "upload-to-drive",
        component : UploadToDriveComponent,
        canActivate : [BackdoorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
