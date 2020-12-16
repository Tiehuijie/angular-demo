import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 11;

  ngOnDestroy(): void {
    this.clearTimer();
  }

  start(): void{
    this.countDown();
  }

  stop(): void{
    this.clearTimer();
    this.message  = `Holding at T-${this.seconds} seconds`;
  }

  clearTimer(): void{
    clearInterval(this.intervalId);
  }

  countDown(): void{
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0){
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}