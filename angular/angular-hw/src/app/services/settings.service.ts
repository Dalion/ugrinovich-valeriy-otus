import {Injectable} from '@angular/core';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private defaultSettings = {
    languages: ['en-US', 'ru-RU'],
    nativeLanguage: 'ru-RU',
    learnLanguage: 'en-US',
    wordsPerOnce: 10
  };

  constructor() {
  }

  private getSettings() {
    return JSON.parse(_.defaultTo(localStorage.getItem('settings'), JSON.stringify(this.defaultSettings)));
  }

  getWordsCount() {
    return this.getSettings().wordsPerOnce;
  }

  getLanguages() {
    return this.getSettings().languages;
  }

  getNativeLanguage() {
    return this.getSettings().nativeLanguage;
  }

  getLearnLanguage() {
    return this.getSettings().learnLanguage;
  }

  setSettings(newNativeLanguage: string, newLearnLanguage: string, newWordsPerOnceCount: number) {
    const settings = {
      ...this.getSettings(),
      nativeLanguage: newNativeLanguage,
      learnLanguage: newLearnLanguage,
      wordsPerOnce: newWordsPerOnceCount
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
