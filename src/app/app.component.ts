import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  githubUserName:string ='';
  login:string='';
  bio:string='';
  location:string='';
  avatar_url:string ='';
  html_url:string='';
  userData:object = {};
  userRepos:any;
  per_page:number=10;
  page:number=1;
  setUserName(message: string) {
    this.githubUserName = message;
    console.log(this.githubUserName);
    this.apiService.getUser(this.githubUserName).subscribe((data: any) => {
      this.login = data.login;
      this.location = data.location;
      this.bio = data.bio;
      this.avatar_url = data.avatar_url;
      this.html_url = data.html_url;
      // this.userData=data;
      // console.log(this.userData);
    });
    this.apiService.getRepos(this.githubUserName,this.per_page,this.page).subscribe((data: any) => {
      this.userRepos = data;
      console.log(this.userRepos);
    })
  }
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    //   this.apiService.getUser(this.githubUserName).subscribe(console.log);
    // // this.apiService.getRepos(this.githubUserName).subscribe((data: any) => {
    // //   this.userRepos = data;
    // //   console.log(this.userRepos);
    // // })
  };
}
