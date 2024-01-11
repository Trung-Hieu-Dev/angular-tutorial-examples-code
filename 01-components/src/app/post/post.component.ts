import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'List of Posts';
  postParentMessage: string = 'Message from Post Parent';
  postChildMessage: string = 'Message from Post Child Component';
  outputChildMessage: string = 'Message from Post Child Component via @Output';

  postMessage: string = 'Message from Post';

  outputEvent = 'Event output from child';

  @Input() fromParent: string | undefined;
  @Input() postTitleProp: string | undefined;

  @Output() messageEvent = new EventEmitter<string>();
  @Output() childEvent = new EventEmitter<string>();

  ngOnInit() {}

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }

  sendEvent() {
    this.childEvent.emit(this.outputEvent);
  }
}
