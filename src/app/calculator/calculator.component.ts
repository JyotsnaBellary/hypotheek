import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var loan: any;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num1:number | any;
  num2:number | any;
  num3:number | any;

  total:number | any;
  monthlyEMI:number | any;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
   // new loan();
   this.total ='';
   this.monthlyEMI ='';
  }

  loanAmount(){
    this.total = 60*(0.6*this.num1);
    return this.total;
  }
  emi(){
    this.monthlyEMI= this.num2*(8.5/1200)*((((8.5/1200)+1)**(this.num3*12))/((((8.5/1200)+1)**(this.num3*12))-1) );
    return this.monthlyEMI;
  }

  home() {
    this.router.navigate(['/home'])
  }
}
