import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError , Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cache: { [url: string]: any } = {};
  constructor(
    private httpClient: HttpClient
  ) { }

  getWithCache<T>(url: string): Observable<T> {
    if (this.cache[url]) {
      return of(this.cache[url]);
    } else {
      return this.httpClient.get<T>(url).pipe(
        tap(response => {
          this.cache[url] = response;
        })
      );
    }
  }

  clearCache() {
    this.cache = {};
  }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepos(githubUsername: string , page:number , per_page:number) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?per_page=${per_page}&page=${page}`);
  }

 
}

