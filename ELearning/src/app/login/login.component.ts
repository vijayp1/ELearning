import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data1: any;
  // log: Boolean | undefined;
  constructor(public router:Router,private formBuilder:FormBuilder,private restservice:LoginService,private httpClient:HttpClient) {
   }
  form = this.formBuilder.group({
    username: '',
    password: '',
  });
  ngOnInit(): void {
    
  }

  onSubmit(){
    var username = this.form.value.username;
    var password = this.form.value.password;
    let request = {
      "username":this.form.value.username,
      "password":this.form.value.password

    }
    let resp = this.httpClient.post("http://localhost:8080/findUser",request)
    resp.subscribe((data)=>{
      console.log("user finded"+ data);
      this.data1=JSON.parse(JSON.stringify(data));
      if(null != JSON.parse(JSON.stringify(this.data1)) && this.data1.username != null){
        this.restservice.setlogged(true);
        this.restservice.setUser(this.data1.username);
        this.router.navigate(['home']);

      }else{
        window.alert('invalid credentials');
      }
    })
  }
  logged(){
    console.log("login flag :"+this.restservice.logged());
    return this.restservice.logged();
  }

}
