import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;
  
  user:User = new User();
  gender: any = ['Male','Female',]
    

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,) { }

  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      firstName: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', [Validators.required]],
      phoneNumber:  ['', [Validators.required]],
      gender:  ['', [Validators.required]], 
      aadharNumber:  ['', [Validators.required]],
      panNumber:  ['', [Validators.required]],
  });
  }  

  get f() { return this.registerForm.controls; }

  changeGender(e: | any) {
    this.registerForm.get('gender').setValue(e.target.value, {
     onlySelf: true
    })
  }
 
onSubmit() {
  this.submitted = true;
this.user=this.registerForm.value;
  // stop the process here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
 
  this.save();
}
save() {

  this.authenticationService.saveUser(this.user)
    .subscribe(data => console.log(data), error => console.log(error));
  this.user= new User();
  this.gotoList();
  }
  
  gotoList() {
    this.router.navigate(['/login']);
    }
}
  
