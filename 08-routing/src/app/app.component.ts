import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ang-routing';
  subsObj: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.subsObj = new Observable((observer) => {
      // create return value
      observer.next('The first printed from observable');
      observer.next('The second printed from observable');

      setTimeout(() => {
        observer.next('From the set timeout');
      }, 2000);

      observer.next('The third printed from observable');
    }).subscribe((value) => console.log(value));
  }

  ngOnDestroy() {
    this.subsObj.unsubscribe();
  }

  onSubmit() {
    this.router.navigate(['/posts'], {
      queryParams: { page: 1, orderBy: 'newest' },
    });
  }
}
