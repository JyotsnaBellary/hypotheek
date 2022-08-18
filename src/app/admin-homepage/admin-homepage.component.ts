import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AdminServiceService } from '../admin-service.service';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
 
  loanAmount: any;
  users: Observable<User[]> | any; //object used to store data from rest api


  constructor(
    private router:Router,
    private userservice:UserServiceService,
    private userloginService:AuthenticationService
    ) { }

  ngOnInit(): void {
    this.reloadData();
    // this.loan();
    this.listuser();
  }

  reloadData() {
    this.users = [];
    
    this.userservice.findallusers().subscribe(res=>{
      debugger
      this.users= res;
    });
   
    
  }

  updateuser(id:any){
    this.userservice.updateuser(id).subscribe(r=>{
    });
    this.users = [];
    
    this.userservice.findallusers().subscribe(res=>{
      debugger
      this.users= res;
    });
  }

  deleteUser(id:string){
    this.userservice.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  docDetails(id:string)
  {
    this.router.navigate(['admin-doc-details' ,id]);
  }
  
  listuser(){
    this.users = [];
    this.userservice.getUserList().subscribe(res=>{
      debugger
      this.users= res;
    });
  }
  adminLogout() {

    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
function editUser(id: any, string: any) {
  throw new Error('Function not implemented.');
}







