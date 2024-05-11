import { Component, Output ,EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent {
  @Output() githubUserName = new EventEmitter<string>();
  // userData: any;
  // userRepos:any;
  constructor(private apiService: ApiService) {}

  searchUser(username:string) {
    this.githubUserName.emit(username);
  
  }
}
