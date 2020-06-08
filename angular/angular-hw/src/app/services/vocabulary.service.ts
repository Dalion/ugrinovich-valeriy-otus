import {Injectable} from '@angular/core';
import {Word} from "../domain/word";
import {SettingsService} from "./settings.service";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  constructor(private settingsService: SettingsService) {
  }

  private getVocabulary(nativeLanguage?: string) {
    const language = _.defaultTo(nativeLanguage, this.settingsService.getNativeLanguage());
    return JSON.parse(_.defaultTo(localStorage.getItem(language), '{}'));
  }

  store(word: Word) {
    const vocabulary = this.getVocabulary(word.language);
    _.set(vocabulary, word.value, word);
    localStorage.setItem(word.language, JSON.stringify(vocabulary))
  }

  getAll() {
    return this.getVocabulary();
  }

  getRandom(size?: number) {
    const count = _.defaultTo(size, this.settingsService.getWordsCount());
    const vocabulary = this.getVocabulary();
    const randomWords = _.sampleSize(_.keys(vocabulary), count);
    return _.map(randomWords, key => vocabulary[key]);
  }
}
