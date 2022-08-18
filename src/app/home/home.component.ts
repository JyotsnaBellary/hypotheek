import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(public userloginService:AuthenticationService,
      public adminloginservice:AdminServiceService,
      public router:Router) { }

    check() {

      if(this.userloginService.isUserLoggedIn()) {
  
        this.router.navigate(['userprofile',this.userloginService.emailId]);
      }
    }

  ngOnInit(): void {
  }

}
