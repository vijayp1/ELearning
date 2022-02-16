import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {} from '@angular/material';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { WebsitesComponent } from '../websites/websites.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  listOfCourses :any;

  constructor(private httpClient:HttpClient,private loginserv:LoginService,private formBuilder:FormBuilder,public router:Router) { }
  form = this.formBuilder.group({
    search:''
  });

  ngOnInit(): void {
    let resp = this.httpClient.get("http://localhost:8080/getCouses")
    resp.subscribe((data)=>{
      console.log("user finded"+ data);
      this.listOfCourses=JSON.parse(JSON.stringify(data));
      
    })
  }
  onclick(id:string){
    console.log("courseid:"+id)
    this.loginserv.selectedCourse=id;
  }

  public  DeleteCourse(course_Id : String){
    console.log("deleting course"+course_Id);
    let resp = this.httpClient.get("http://localhost:8080/deleteCourse/"+course_Id)
    resp.subscribe((data)=>{
      console.log("delete : "+ data);
      // this.listOfWebsites=JSON.parse(JSON.stringify(data));
    });
    this.ngOnInit();
  }

  public admin(){
    if(this.loginserv.username=="admin")
      return true;
    else 
      return false;
  }

  search(){
    this.loginserv.searchedCourse=this.form.value.search;
    let resp = this.httpClient.get("http://localhost:8080/getCourseById/"+this.loginserv.searchedCourse);
    resp.subscribe((data)=>{
      console.log("user finded"+ data);
      this.listOfCourses=JSON.parse(JSON.stringify(data));
      
    })
  }

}
