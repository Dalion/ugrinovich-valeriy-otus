import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private _location: Location) {
  }

  ngOnInit(): void {
  }

  backClick() {
    this._location.back();
  }

  save() {

  }
}
