import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-name-child',
  template: `
    <h3>{{childName}}</h3>
  `
})
export class NameChildComponent{
  @Input()
  get childName(): string { return this._childName; }
  set childName(name: string) {
    this._childName = (name && name.trim()) || '<no name set>';
  }
  // tslint:disable-next-line:variable-name
  private _childName = '';
}
