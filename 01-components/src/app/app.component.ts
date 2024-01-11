import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = '01-components';
  parentMessage: string = 'Message changed';
  message: string | undefined;
  fromChildOutput: string | undefined;

  postTitle: string = 'Title passed from parent to child';

  @ViewChild(PostComponent) fromChild: any | undefined;
  @ViewChild(PostComponent) postMess: any | undefined;

  constructor() {
    console.log(this.fromChild);
  }

  receiveMessage($event: string) {
    // console.log($event);
    this.fromChildOutput = $event;
  }

  receiveEvent($event: string) {
    console.log($event);
  }

  ngAfterViewInit() {
    console.log(this.fromChild);
    setTimeout(() => {
      this.message = this.fromChild.postChildMessage;
    }, 0);

    console.log(this.postMess);
  }
}
