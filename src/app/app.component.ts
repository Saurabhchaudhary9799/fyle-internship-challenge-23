import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentPage: number = 1;
  isLoading: boolean = false;
  githubUserName:string ='';
  userData:any;
  userRepos:any;
  totalRepos:number=0; 
  per_page:number=10;
  per_pages:any =[10,20,30,40,50,60,70,80,90,100];
  
  
 

  setUserName(message: string) {
    this.githubUserName = message;
    console.log(this.githubUserName);
    this.isLoading = true;
    this.getUserDetails();
    this.getAllRepos();
    
  }

  getUserDetails():void{
    this.apiService.getUser(this.githubUserName).subscribe((data: any) => {
      this.isLoading = false;
      this.userData=data;
      // console.log(this.userData);
    });
  }
  getAllRepos():void{
    this.apiService.getRepos(this.githubUserName,this.per_page,this.currentPage).subscribe((data: any) => {
      this.isLoading = false;
      this.userRepos = data;
      this.totalRepos = data.length;
      console.log(this.totalRepos);
    })
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
