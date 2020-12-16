import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CountdownTimerComponent} from './countdown-timer.component';

@Component({
  selector: 'app-countdown-parent',
  template: `
    <h3>父组件与子组件通过本地变量互动</h3>
    <button (click)="start()">start</button>
    <button (click)="stop()">end</button>
    <app-countdown-timer ></app-countdown-timer>
  `
})
export class CountdownParentComponent implements AfterViewInit{
  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  ngAfterViewInit(): void {
  }

  stop(): void{
    this.timerComponent.stop();
  }

  start(): void{
    this.timerComponent.start();
  }
}
