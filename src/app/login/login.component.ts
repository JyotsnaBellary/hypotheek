import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string | any;
  loginSuccess = false;

  constructor(private router: Router,
    private loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin(username : string | any) {
    let user={
      "emailId":this.username,
      "password":this.password
    }
    this.loginService.login(user).subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['application',this.username]);
        sessionStorage.setItem('username', this.username);
        // alert(this.username);
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
      }
      else{
        this.invalidLogin = true;
      }
    });
    this.loginSuccess = false;
  }
  
  userRegister() {

    this.router.navigate(['/register']).then(() => {
      window.location.reload();
    });
  }
}
