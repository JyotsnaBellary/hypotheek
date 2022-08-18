import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  aname=''
  password=''
  invalidLogin=false
  errorMessage='Invalid Credentials';
  successMessage='Login Successfully';
  loginSuccess=false;

  constructor(
    private router:Router,
    private adminservice : AdminServiceService
  ) { }

  ngOnInit(): void {
  }

  checkLogin() {
    let admin={
      "email":this.aname,
      "password":this.password
    }

    this.adminservice.login(admin).subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['/admin-homepage']);
        sessionStorage.setItem('aname', this.aname);
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
      }
      else{
        this.invalidLogin = true
      }
      });
   
    this.loginSuccess = false;
  }

  adminRegister() {

    this.router.navigate(['/admin-register']).then(() => {
      window.location.reload();
    });
  }
}
