import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MyRoutingModule } from "app/app.router";
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { FormsModule } from '@angular/forms';
import { SignupService } from "app/signup/signup.service";
import { HttpModule } from "@angular/http";
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSliderModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';
import { AddMessComponent } from './add-mess/add-mess.component';
import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ForgetComponent,
    HomeComponent,
    SearchResultComponent,
    AddMessComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    MyRoutingModule,
    FormsModule,
    HttpModule,
    MatSliderModule,
    MatCheckboxModule,
    MatExpansionModule,
    FancyImageUploaderModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [SignupService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
