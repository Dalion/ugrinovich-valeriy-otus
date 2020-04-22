import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { title: 'Recently added', path: '/' },
    { title: 'Go', path: '/go' },
    { title: 'Settings', path: '/settings' }
  ];

  constructor(public route: ActivatedRoute) {}
}
