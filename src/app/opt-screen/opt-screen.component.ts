import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-opt-screen',
  templateUrl: './opt-screen.component.html',
  styleUrls: ['./opt-screen.component.scss']
})
export class OptScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  field1: string;
  field2: string;
  // Add more fields as needed

  @ViewChild('digit1') digit1Input: ElementRef;
  @ViewChild('digit2') digit2Input: ElementRef;
  @ViewChild('digit3') digit3Input: ElementRef;
  @ViewChild('digit4') digit4Input: ElementRef;

  onInputChange(digit: number) {
    const digitInput = this.getDigitInput(digit);

    // Access the nativeElement and then get the value property
    const inputValue = digitInput.nativeElement.value;
  
    if (inputValue.length === 1) {
      this.focusNextInput(digit);
    }
  }

  onPaste(event: ClipboardEvent) {
    console.log(event);
    
    const pastedData = event.clipboardData.getData('text/plain');

    if (/^\d{4}$/.test(pastedData)) {
      this.fillAllFields(pastedData);
      event.preventDefault(); // Prevent default paste behavior
    }
  } 

  private fillAllFields(value: string) {
    this.digit1Input.nativeElement.value = value.charAt(0);
    this.digit2Input.nativeElement.value = value.charAt(1);
    this.digit3Input.nativeElement.value = value.charAt(2);
    this.digit4Input.nativeElement.value = value.charAt(3);

    // Optionally, you can trigger focus on the first empty field after filling.
    this.focusNextInput(3);
  }

  private focusNextInput(currentDigit: number) {
    const nextDigit = currentDigit < 4 ? currentDigit + 1 : 1;
    const nextInput = this.getDigitInput(nextDigit);

    nextInput.nativeElement.focus();
  }

  private getDigitInput(digit: number): ElementRef {
    switch (digit) {
      case 1:
        return this.digit1Input;
      case 2:
        return this.digit2Input;
      case 3:
        return this.digit3Input;
      case 4:
        return this.digit4Input;
      default:
        throw new Error('Invalid digit');
    }
  }

}
