import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() icon!: string;
  @Output() onClickEvent = new EventEmitter();

  constructor() { }

  clickHandle() {
    this.onClickEvent.emit();
  }
}
