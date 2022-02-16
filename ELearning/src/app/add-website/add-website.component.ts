import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-website',
  templateUrl: './add-website.component.html',
  styleUrls: ['./add-website.component.css']
})
export class AddWebsiteComponent implements OnInit {
  data1 : any;


  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient) { }

  form = this.formBuilder.group({
    name: '',
    course_id: '',
    img: '',
    price: '',
    url_id: '',
    url: ''
  });

  ngOnInit(): void {
    console.log("add site");
  }
  onSubmit(){
    console.log("hi");

    let request = {
      "name":this.form.value.name,
      "course_id":this.form.value.course_id,
      "img":this.form.value.img,
      "price":this.form.value.price,
      "url_id":this.form.value.url_id,
      "url":this.form.value.url

    }
    
    let resp = this.httpClient.post("http://localhost:8080/addWebsite",request)
    resp.subscribe((data)=>{
      console.log("course added"+ data);
      this.data1=JSON.parse(JSON.stringify(data));
    })
  }

}
