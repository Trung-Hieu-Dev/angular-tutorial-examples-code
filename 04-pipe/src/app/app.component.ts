import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular Course';
  count: number = 123456677;
  decCount: number = 3.45464;
  price: number = 86.88;

  today: Date = new Date();

  postObj: object = { id: 1, postTitle: 'Post 1' };

  userDetails: any = { id: 1, name: 'John Kenny', city: 'New York' };

  constructor() {}
}
