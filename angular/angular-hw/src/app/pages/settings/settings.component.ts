import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {SettingsService} from "../../services/settings.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  languages: string[];

  constructor(private _location: Location, private settingsService: SettingsService) {
  }

  ngOnInit(): void {
    this.languages = this.settingsService.getLanguages();
  }

  nativeLanguage = new FormControl(this.settingsService.getNativeLanguage());
  learnLanguage = new FormControl(this.settingsService.getLearnLanguage());
  wordsPerOnce = new FormControl(this.settingsService.getWordsCount());

  backClick() {
    this._location.back();
  }

  save() {
    this.settingsService.setSettings(this.nativeLanguage.value, this.learnLanguage.value, this.wordsPerOnce.value);
  }
}
