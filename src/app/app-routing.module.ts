import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CourseGuardService} from "./course-guard.service";
const routes: Routes = [
  {path :'home', component:HomeComponent,canActivate:[CourseGuardService]},
  {path :'about', component:AboutComponent,canActivate:[CourseGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
