import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddWebsiteComponent } from './add-website/add-website.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WebsitesComponent } from './websites/websites.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"course",component:CourseComponent},
  {path:"website",component:WebsitesComponent},
  {path:"addWebsite",component:AddWebsiteComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"about",component:AboutComponent},
  {path:"users",component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
