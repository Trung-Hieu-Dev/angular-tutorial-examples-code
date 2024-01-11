import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];
  objArray: Array<any> = [];
  stepForm: string = 'Something else';

  isActive = true;

  name: string;
  email: string;
  address: string;
  users: Array<any> = [];

  addItem() {
    this.objArray.push({ id: 6, postTitle: 'Post 6' });
  }

  deleteItem(index: number) {
    this.objArray.splice(index, 1);
  }

  onClick(value: string) {
    this.stepForm = value;
  }

  onSubmitForm() {
    this.users.push({
      name: this.name,
      email: this.email,
      address: this.address,
    });
    console.log(this.users);
  }

  onDelete(index: number) {
    this.users.splice(index, 1);
  }
}
