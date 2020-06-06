import {Injectable} from '@angular/core';
import {VocabularyService} from "./vocabulary.service";
import {TranslateResponse} from "../domain/translate";
import {TranslateService} from "./translate.service";
import {Word} from "../domain/word";
import {SettingsService} from "./settings.service";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private translateService: TranslateService,
    private vocabularyService: VocabularyService,
    private settingsService: SettingsService
  ) {
  }

  storeWord(word: string, description?: string) {
    const thereCouldBeText = word.split(/\s+/g);
    thereCouldBeText.forEach(word => this.translateService.translate(word)
      .subscribe((response: TranslateResponse) => {
        const language = this.settingsService.getNativeLanguage();
        const translations = _.get(response, 'data.translations');
        if (!_.isEmpty(_.get(translations, '[0].translatedText'))) {
          const wordObj = new Word(word, language, translations, description);
          this.vocabularyService.store(wordObj)
        }
      }));
  }
}
