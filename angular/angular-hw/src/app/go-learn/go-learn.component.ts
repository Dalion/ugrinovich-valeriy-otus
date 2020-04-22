import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-go-learn',
  templateUrl: './go-learn.component.html',
  styleUrls: ['./go-learn.component.scss']
})
export class GoLearnComponent implements OnInit {
  word = "Education";

  constructor() {
  }

  ngOnInit(): void {
  }

  next() {
    this.word = this.word.split('').reverse().join('');
  }
}
