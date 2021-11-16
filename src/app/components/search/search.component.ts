import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() onInputEvent = new EventEmitter<string>();

  constructor() { }

  onInputHandle(event: any) {
    this.onInputEvent.emit(event.target.value);
  }
}
