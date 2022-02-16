import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ELearning';
  username :string | undefined;
  listOfCourses:any;
  constructor(public router:Router,private loguser:LoginService,private formBuilder:FormBuilder,private httpClient:HttpClient){

  }

  form = this.formBuilder.group({
    search:''
  });

  signout(){
    this.loguser.setlogged(false);
  }

  logged(){
    // console.log("hi"+this.loguser.logged());
    this.username = this.loguser.username;
    return this.loguser.logged();
  }

  onSubmit(){
    var search = this.form.value.search;
  }

  setuser(user : string){
    this.username = user;
  }
  logout(){
    this.loguser.setlogged(false);
    this.router.navigate(['login']);
  }

  
  
}
