import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.scss']
})
export class CountTimerComponent implements OnInit {
  hour: number | undefined;
  minute: number | undefined;
  second: number | undefined;
  intervalId: any;
  stopflag:boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  startTimer() {
    this.stopflag = false;
    if (this.hour == 0 && this.minute == 0 && this.second == 0) {
      return;
    }else{
      this.intervalId = setTimeout(() => {
        this.timer()
        this.startTimer();
      }, 1000);
    }
  }
  timer() {
    if (this.hour == 0 && this.minute == 0 && this.second == 0) {
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.stopTimer();
    } else if (this.second && this.second != 0) {
      console.log('hello', this.second);
      this.second = this.second - 1
    } else if (this.minute && this.minute != 0 && this.second == 0) {
      this.second = 59;
      this.minute = this.minute - 1
    } else if (this.hour && this.hour != 0 && this.minute == 0) {
      this.minute = 60;
      this.hour = this.hour - 1
    }
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.stopflag = true;
      console.log('Interval stopped');
    }
  }

  resetTimer() {
    this.hour = undefined;
    this.minute = undefined;
    this.second = undefined;
  }
}
