import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Output() onSelectEvent = new EventEmitter<string>();
  public active: boolean = false;
  public selected: string = '';

  toggleDropdownMenu() {
    this.active = !this.active;

    if (this.selected) {
      this.selected = '';
      this.onSelectEvent.emit('');
    }
  }

  selectHandle(option: string) {
    this.active = false;
    this.selected = option;
    this.onSelectEvent.emit(option);
  }
}
