import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserReposComponent } from './user-repos/user-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserProfileComponent,
    UserReposComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
