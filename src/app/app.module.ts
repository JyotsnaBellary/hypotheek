import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { ApplicationComponent } from './application/application.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { FeaturesComponent } from './features/features.component';
import { DocumentsComponent } from './documents/documents.component';
import { LoanTrackerComponent } from './loan-tracker/loan-tracker.component';
import { YourAccountComponent } from './your-account/your-account.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';

import { AlertModule } from 'ngx-bootstrap/alert';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FaqComponent } from './faq/faq.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    LoginComponent,
    ApplicationComponent,
    AboutusComponent,
    RegisterComponent,
    FeaturesComponent,
    DocumentsComponent,
    LoanTrackerComponent,
    YourAccountComponent,
    LoginAdminComponent,
    AdminLogoutComponent,
    UserLogoutComponent,
    AdminRegisterComponent,
    AdminHomepageComponent,
    UserDetailsComponent,
    FaqComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
