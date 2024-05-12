import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserProfileComponent,
    UserReposComponent,
    SkeletonLoaderComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
