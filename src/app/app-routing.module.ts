import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ApplicationComponent } from './application/application.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { FeaturesComponent } from './features/features.component';
import { DocumentsComponent } from './documents/documents.component';
import { LoanTrackerComponent } from './loan-tracker/loan-tracker.component';
import { YourAccountComponent } from './your-account/your-account.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'login',component:LoginComponent},
  { path:'application/:emailId',component:ApplicationComponent},
  { path:'calculator',component:CalculatorComponent},
  { path:'aboutus',component:AboutusComponent},
  { path:'register',component:RegisterComponent},
  { path:'features',component:FeaturesComponent},
  { path:'documents',component:DocumentsComponent},
  { path:'loan-tracker',component:LoanTrackerComponent},
  { path:'your-account',component:YourAccountComponent},
  { path:'adminLogin',component:LoginAdminComponent},
  { path:'user-logout',component:UserLogoutComponent},
  { path:'admin-register',component:AdminRegisterComponent},
  { path:'admin-homepage',component:AdminHomepageComponent},
  { path:'admin-doc-details/:id',component:UserDetailsComponent},
  {path: 'faq',component:FaqComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
