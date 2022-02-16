import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data1 !: any;
  constructor(public router:Router,private formBuilder:FormBuilder,private httpClient:HttpClient) { }
  form = this.formBuilder.group({
    usrid: '',
    name: '',
    pass: '',
    phno: '',
    email: ''
  });
  ngOnInit(): void {
  }

  onSubmit(){
    let request = {
      "username":this.form.value.usrid,
      "password":this.form.value.pass,
      "name":this.form.value.name,
      "phone":this.form.value.phno,
      "email":this.form.value.email

    }
    let usrid = this.form.value.usrid;
    let Name = this.form.value.name;
    var pass = new String(this.form.value.pass);
    var phno = new String(this.form.value.phno);
    let email = this.form.value.email;
    if((usrid=="") || (Name=="") || (pass=="") || (phno=="") || (email=="")){
      window.alert('Fill all the fields');
    }
    else if(phno.length < 10){
      window.alert('Invalid phone');
    }

    else if(pass.length<6){
      window.alert('Password should be greater than 6 characters');
    }
    else{
      console.log("user :"+this.form.value);
      let resp = this.httpClient.post("http://localhost:8080/addUser",request)
      resp.subscribe((data)=>{
        this.data1=JSON.parse(JSON.stringify(data));
        if(null != JSON.parse(JSON.stringify(this.data1)) && this.data1.username !== null){
          window.alert('saved success');
          this.router.navigate(['login']);
        }else{
          window.alert('creation of user failed');
        }
      })

      this.router.navigate(['login']);
    }
  }
}
