import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ApplicationDetailsService } from '../application-details.service';
import { AuthenticationService } from '../authentication.service';
import { Details } from '../details';
import { User } from '../user';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  emailId: any;
  user: User | any;
  details: Details | any;
  msg1:String | any;
  msg2:String | any;
  msg3:String | any;
  // new FormControl(field.fieldValue || '', [Validators.required, this.noWhitespaceValidator])
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private authenticationservice:AuthenticationService,
    private detailsService:ApplicationDetailsService
    ) { }

  ngOnInit(): void {
    this.user = new User();
    this.details = new Details();
    this.emailId = this.route.snapshot.params['email'];

    this.authenticationservice.getUser(this.emailId)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  clickEvent3(){
    this.details.email = sessionStorage.getItem('username');
    this.detailsService.addInfo(this.details).subscribe(res=>{
      this.msg3='Successfully Submited';
    });
    this.msg3='Successfully Submited';
    return this.msg3;
  }
  next() {
    this.router.navigate(['/documents'])
   
  }
//   public noWhitespaceValidator(control: FormControl) {
//     const isWhitespace = (control.value || '').trim().length === 0;
//     const isValid = !isWhitespace;
//     return isValid ? null : { 'whitespace': true };
// }
}
