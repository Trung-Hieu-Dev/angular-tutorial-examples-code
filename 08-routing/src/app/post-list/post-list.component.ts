import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts = [
    {
      id: 1,
      title: 'Title 1',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      title: 'Title 2',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      title: 'Title 3',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 4,
      title: 'Title 4',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 5,
      title: 'Title 5',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  private subObj: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute, // private subObj: Subscription,
  ) {}

  ngOnInit(): void {
    this.subObj = this.route.queryParamMap.subscribe((value) => {
      let page = value.get('page');
      console.log(page);

      let order = value.get('orderBy');
      console.log(order);
    });
  }

  ngOnDestroy() {
    this.subObj.unsubscribe();
  }
}
