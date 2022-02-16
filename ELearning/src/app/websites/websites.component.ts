import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements AfterViewInit{
  public selectedCourse :any;
  listOfWebsites : any;
  constructor(public router:Router,private httpClient:HttpClient,private loginServ:LoginService) { }
  ngAfterViewInit(): void {
   
  }

  ngOnInit(): void {
    console.log("getwebsite variable"+ this.loginServ.selectedCourse);
    let resp = this.httpClient.get("http://localhost:8080/getWebsites/"+this.loginServ.selectedCourse)
    resp.subscribe((data)=>{
      console.log("website finded"+ data);
      this.listOfWebsites=JSON.parse(JSON.stringify(data));
    });
    
  // getSites(){
  //   l
  // }
  }

  public  DeleteSite(url_ID : String){
    console.log("deleting SITE "+url_ID);
    let resp = this.httpClient.get("http://localhost:8080/deleteWebsite/"+url_ID)
    resp.subscribe((data)=>{
      console.log("delete : "+ data);
      // this.listOfWebsites=JSON.parse(JSON.stringify(data));
    });
    this.ngOnInit();
  }

  public ViewReviews(id:String){
    this.loginServ.selectedUrl_id=id;
    console.log(this.loginServ.selectedUrl_id);
    this.router.navigate(['reviews']);
  }

  public admin(){
    if(this.loginServ.username=="admin")
      return true;
    else 
      return false;
  }
}
