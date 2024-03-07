import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  dynamicValue: number = 1; 
  stepperList: any[] = [];
  counter: number = -1;
  constructor() { }

  ngOnInit(): void {
    this.stepperList.push(
      { step_number: 1, step_name: 'Customer Information', status: false },
      { step_number: 2, step_name: 'Shopping Information', status: false },
      { step_number: 3, step_name: 'Payment', status: false },
      { step_number: 4, step_name: 'Delivered', status: false }
    )
  }
  nextButton() {
    if (this.counter < this.stepperList.length) {
      this.counter = this.counter + 1
      this.stepperList[this.counter].status = true;
      this.dynamicValue = this.dynamicValue + 25; 
      console.log('this.dynamicValue',this.dynamicValue);
      
    }

  }
  perviousButton() {
    if (this.counter >= -1) {
      this.stepperList[this.counter].status = false;
      this.counter = this.counter - 1;
      console.log(this.counter);
      this.dynamicValue = this.dynamicValue - 25; 
    }
  }
}
