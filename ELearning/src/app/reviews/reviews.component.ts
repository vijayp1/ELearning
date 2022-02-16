import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  listOfReviews:any;
  data1 !: any;

  constructor(public router:Router,private formBuilder:FormBuilder,private loginServ:LoginService,private httpClient:HttpClient) { }

  form = this.formBuilder.group({
    username: '',
    urlId: '',
    review: ''
  });

  ngOnInit(): void {
    let resp = this.httpClient.get("http://localhost:8080/getReviews/"+this.loginServ.selectedUrl_id)
    resp.subscribe((data)=>{
      console.log(this.loginServ.selectedUrl_id);
      this.listOfReviews=JSON.parse(JSON.stringify(data));
    });
  }

  onSubmit(){
    let review=this.form.value.review;

    let request={
      "username":this.loginServ.username,
      "review":review,
      "url_id":this.loginServ.selectedUrl_id
    }

    if(review=="")
      window.alert("enter review before submit");
    else{
      console.log("user :"+this.form.value);
      let resp = this.httpClient.post("http://localhost:8080/addReview",request)
      resp.subscribe((data)=>{
        this.data1=JSON.parse(JSON.stringify(data));
        if(null != JSON.parse(JSON.stringify(this.data1)) && this.data1.username !== null){
          window.alert('saved success');
          this.router.navigate(['reviews']);
        }
      })
    }
  }

  

  public admin(){
    if(this.loginServ.username=="admin")
      return true;
    else 
      return false;
  }

}
