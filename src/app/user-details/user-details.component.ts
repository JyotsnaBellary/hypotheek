import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Documents } from '../documents';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users: Observable<User[]> | any;
  id:string | any;
  user:User | any;
  userDoc: Documents | any;
  doc:Documents | any;
  emailId:string | any;
  docs: Observable<Documents[]>|any;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private userService:UserServiceService,
    private http:HttpClient) { }

   
  // ngOnInit(): void {
  //   this.user=new User();
  //   this.id=this.route.snapshot.params['id'];
  //   this.emailId = sessionStorage.getItem('aname')


  //   this.userService.getuser(this.id)
  //    .subscribe(data => {
  //      console.log(data)
  //      this.user = data;
  //    }, error => console.log(error));

  //   this.doc=new Documents();
  //   // alert(this.user.emailId)
  //   // alert(this.user.email)
  //   this.docs = this.http.get(`http://localhost:8989/dhl/api/documents/${this.user.email}`);
  //    this.docs.subscribe((data:any)=>
  //    {
  //      this.doc=data[0];
  //    })
  //    alert(this.id)
  //    this.listuser(this.id)
  // }


  ngOnInit(): void {
    this.user=new User();
    this.userDoc = new Documents();
    this.id = this.route.snapshot.params['id'];
    // this.emailId = sessionStorage.getItem('aname')


    // this.userService.getuser(this.id)
    //  .subscribe(data => {
    //    console.log(data)
    //    this.user = data;
    //  }, error => console.log(error));

    this.doc=new Documents();
    // alert(this.user.emailId)
    // alert(this.id)
    // this.docs = this.http.get(`http://localhost:8989/dhl/api/documents/${this.id}`);
    //  this.docs.subscribe((data:any)=>
    //  {
    //    this.doc=data[0];
    //  })
    this.userDoc = [];
    this.userService.getUserDoc(this.id).subscribe(res=>{
    debugger
    this.userDoc= res;
  });
    this.listuser(this.id)
  }

  list()
{
  this.router.navigate(['admin-homepage']);
}

listuser(id:any){
  this.users = [];
  // alert('inside listuser')

  this.userService.getuser(id).subscribe(res=>{
    debugger
    this.users= res;
  });
}
}