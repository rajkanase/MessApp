import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "app/navbar/navbar.component";
import { LoginComponent } from "app/login/login.component";
import { SignupComponent } from "app/signup/signup.component";
import { ForgetComponent } from "app/forget/forget.component";
import { HomeComponent } from "app/home/home.component";
import { SearchResultComponent } from "app/search-result/search-result.component";
import { AddMessComponent } from "app/add-mess/add-mess.component";

const routes: Routes = [
    
    { path: '', component: HomeComponent  },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent},
    { path: 'forget', component: ForgetComponent},
    { path: 'search', component: SearchResultComponent},
    { path: 'add-mess', component: AddMessComponent}
];

export const MyRoutingModule = RouterModule.forRoot(routes);