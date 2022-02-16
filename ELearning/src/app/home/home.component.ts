import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data1 :any;

  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient) { }

  form = this.formBuilder.group({
    name: '',
    course_Id: '',
    img: ''
  });
  ngOnInit(): void {
  }

  onSubmit(){
    console.log("hi");
    var name = this.form.value.name;
    var course_Id = this.form.value.course_Id;
    var img = this.form.value.img;
    let request = {
      "name":this.form.value.name,
      "course_Id":this.form.value.course_Id,
      "img":this.form.value.img

    }
    let resp = this.httpClient.post("http://localhost:8080/addCourse",request)
    resp.subscribe((data)=>{
      console.log("course added"+ data);
      this.data1=JSON.parse(JSON.stringify(data));
    })
  }

}
