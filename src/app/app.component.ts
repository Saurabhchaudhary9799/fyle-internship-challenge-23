import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';


export interface Repo {
  name: string;
  description: string;
  html_url: string;
  topics: string[]; // Assuming topics is an array of strings
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:string='fyle-frontend-challenge';
  currentPage: number = 1;
  isLoading: boolean = false;
  githubUserName:string ='';
  userData:any;
  userRepos:Repo[] = [];
  totalRepos:number=0; 
  per_page:number=10;
  per_pages:any =[10,20,30,40,50,60,70,80,90,100];
  restRepo:number = this.totalRepos - (this.currentPage * this.per_page);
  
 

  setUserName(message: string) {
    this.githubUserName = message;
    console.log(this.githubUserName);
    this.isLoading = true;
    this.getUserDetails();
    this.getAllRepos();
  }

  goPrev(){
    if(this.currentPage > 1){
    this.currentPage--;
    }
    this.getAllRepos();
    console.log(this.currentPage);

  }

  goNext(){
    if(this.totalRepos > 0){
    this.currentPage++; }
    this.getAllRepos();
    console.log(this.currentPage);
  }

  getUserDetails():void{
    this.apiService.getUser(this.githubUserName).subscribe((data: any) => {
      this.isLoading = false;
      this.userData=data;
      // console.log(this.userData);
    },
    error => {
      this.isLoading = false;
      this.userData = null;
      console.error('Error fetching data:', error);
    });
  }
  getAllRepos():void{
    this.apiService.getRepos(this.githubUserName ,this.currentPage, this.per_page).subscribe((data: any) => {
      this.isLoading = false;
      this.userRepos = data;
      this.totalRepos = data.length;
      console.log(this.totalRepos);
    },
    error => {
      this.isLoading = false;
      this.userData = null;
      console.error('Error fetching data:', error);
    });
   }

  onTableDataChange(event:any){
     this.currentPage = event;
     this.getAllRepos();
  }

   onTableSizeChange(event:any):void{
    this.per_page = event.target.value;
    this.currentPage = 1;
    this.getAllRepos();
   } 

  constructor(
    private apiService: ApiService,
   
  ) {}

  ngOnInit() {
    
  };
}
