import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(
    private userService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.logOut();
    this.router.navigate(['home']);
  }
}
