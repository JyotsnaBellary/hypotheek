import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationDetailsService } from '../application-details.service';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-your-account',
  templateUrl: './your-account.component.html',
  styleUrls: ['./your-account.component.css']
})
export class YourAccountComponent implements OnInit {
  public accountNo:any = null;
  public acc:any | null;
  public message:any = '';
  // public user: any = null;
  user:User | any;
  users: Observable<User[]> | any;
  constructor(private router:Router,
    private userService:UserServiceService,
    private appservice:ApplicationDetailsService) { }

  ngOnInit(): void {
    this.user=new User();
  }

  getBalance() {
    this.users = [];
    this.userService.findByAccNo(this.accountNo).subscribe(re=>{
      this.users = re;
      debugger
      
    })
  }

}
