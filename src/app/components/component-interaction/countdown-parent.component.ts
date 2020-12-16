import {Component} from '@angular/core';

@Component({
  selector: 'app-countdown-parent',
  template: `
    <h3>父组件与子组件通过本地变量互动</h3>
    <button (click)="timer.start()">start</button>
    <button (click)="timer.stop()">end</button>
    <app-countdown-timer #timer></app-countdown-timer>
  `
})
export class CountdownParentComponent{
}
