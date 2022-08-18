import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminClass } from '../admin-class';
import { AdminServiceService } from '../admin-service.service';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;

  gender: any = ['Male','Female']

  admin: AdminClass = new AdminClass();
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', [Validators.required]],
      phoneno:  ['', [Validators.required]],
      panNo:  ['', [Validators.required]],
      gender:  ['', [Validators.required]],
      adharNo:  ['', [Validators.required]],
    });
  }

  get f() { return this.registerForm.controls; }

  changegender(e: | any) {
    this.registerForm.get('gender').setValue(e.target.value, {
     onlySelf: true
    })
  }
  onSubmit() {
    this.submitted = true;
  this.admin=this.registerForm.value;
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    this.save();
  }
  
  save() {
  
    this.adminService.saveAdmin(this.admin)
      .subscribe(data => console.log(data), error => console.log(error));
    this.admin= new AdminClass();
    // this.address=new Address();
  
    this.gotoList();
  }
  
  gotoList() {
    this.router.navigate(['/adminLogin']);
  }
}
