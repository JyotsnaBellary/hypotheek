import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { AdminServiceService } from './admin-service.service';
import { ApplicationDetailsService } from './application-details.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
   

   
})
export class AppComponent {
  name="";
  title = 'hypotheek';
  imagePath = '/assets/images/images1.jpeg';

  constructor(
    public userloginService:AuthenticationService,
    public adminloginservice:AdminServiceService,
    public router:Router) { }

    check() {

      if(this.userloginService.isUserLoggedIn()) {
  
        this.router.navigate(['userprofile',this.userloginService.emailId]);
      }
    }
  
    Search() {
      this.router.navigate(['search',this.name]);
    }
}
