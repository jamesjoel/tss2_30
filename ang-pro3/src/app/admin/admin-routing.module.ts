import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent  } from './admin.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { StudentComponent  } from './pages/student/student.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component :HomeComponent
      },
      {
        path : "dash",
        component : DashboardComponent
      },
      {
        path : "teacher",
        component : TeacherComponent
      },
      {
        path : "student",
        component : StudentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
