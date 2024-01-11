import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  message: string = 'Message From Typescript Component File';
  imgUrl: string =
    'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';

  bool: boolean = true;
  greenText: string = 'green';
  text: string;

  buttonClick() {
    console.log('clicked');
  }

  inputHandle($event: any) {
    console.log($event.target.value);
  }

  userNameHandle(name: string) {
    console.log(name);
  }

  twoWayBindingHandle() {
    console.log(this.text);
  }
}
