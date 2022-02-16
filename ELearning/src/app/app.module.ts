import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './course/course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { WebsitesComponent } from './websites/websites.component';
import { AddWebsiteComponent } from './add-website/add-website.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { UsersComponent } from './users/users.component';
// import { SettingsComponent } from './settings/settings.component';
// import { AddwebsiteComponent } from './addwebsite/addwebsite.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CourseComponent,
    WebsitesComponent,
    AddWebsiteComponent,
    AboutComponent,
    ReviewsComponent,
    UsersComponent,
    // SettingsComponent,
    // AddwebsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
