import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepos(githubUsername: string,per_page:number,page:number) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${per_page}`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
