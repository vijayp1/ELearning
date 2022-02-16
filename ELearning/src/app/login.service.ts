import { Injectable, OnInit } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  loginFlag !: Boolean;
  username : string | undefined;
  public selectedCourse : any;
  public selectedUrl_id:any;
  public searchedCourse:any;
  constructor() { }
  ngOnInit(): void {
    this.loginFlag = false;
    this.searchedCourse=false;
  }

  logged(){
    return this.loginFlag;
  }
  setlogged(flag:Boolean ){
    this.loginFlag = flag;
  }

  setUser(user:string){
    // this.appconp.setuser(user);
    this.username=user;
  }
}
