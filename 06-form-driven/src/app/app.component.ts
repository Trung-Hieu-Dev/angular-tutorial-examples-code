import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular Form';
  user: User;

  constructor() {}

  onSubmit(f: NgForm) {
    this.user = {
      fullName: f.value.fullName,
      email: f.value.email,
      address: f.value.address,
    };
    console.log(this.user);
  }

  getValue(f: NgModel) {
    console.log(f);
  }
}
