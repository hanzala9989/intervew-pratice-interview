import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusNextInput]'
})
export class FocusNextInputDirective {

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab' || event.key === 'ArrowRight') {
      this.focusOnNextInput();
    } else if (event.key === 'ArrowLeft' && (document.activeElement === this.el.nativeElement)) {
      this.focusOnPreviousInput();
    }
  }

  private focusOnNextInput() {
    const nextInput = this.el.nativeElement.nextElementSibling;
    if (nextInput && nextInput.tagName === 'INPUT') {
      nextInput.focus();
    }
  }

  private focusOnPreviousInput() {
    const previousInput = this.el.nativeElement.previousElementSibling;
    if (previousInput && previousInput.tagName === 'INPUT') {
      previousInput.focus();
    }
  }
}
