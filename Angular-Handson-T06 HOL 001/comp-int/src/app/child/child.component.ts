import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input('childMessage')
  message: string;

  @Output()
  messageEvent = new EventEmitter<string>();

  //this message1 will passed from child to parent via  @ViewChild("")
  message1: string = 'I am child. Sending a message to parent';

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit('I am child. Sending a message to parent1');
  }
}
