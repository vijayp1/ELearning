import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listOfUsers :any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    let resp = this.httpClient.get("http://localhost:8080/getUsers")
    resp.subscribe((data)=>{
      console.log("user finded"+ data);
      this.listOfUsers=JSON.parse(JSON.stringify(data));
      
    })
  }

  admin(uname:String){
    if(uname=="admin")
      return true;
    return false;
  }

}
