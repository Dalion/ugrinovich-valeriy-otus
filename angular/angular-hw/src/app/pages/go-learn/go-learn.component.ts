import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {VocabularyService} from "../../services/vocabulary.service";
import {Word} from "../../domain/word";
import * as _ from 'lodash';

@Component({
  selector: 'app-go-learn',
  templateUrl: './go-learn.component.html',
  styleUrls: ['./go-learn.component.scss']
})
export class GoLearnComponent implements OnInit {
  words = [];
  word: Word;
  index = 0;

  translate = new FormControl();

  constructor(private vocabularyService: VocabularyService) {
  }

  ngOnInit(): void {
    const words = this.vocabularyService.getRandom()
    this.takeWord(words);
    this.words = words;
  }

  takeWord(words?) {
    const word = _.get(_.defaultTo(words, this.words), `[${this.index}]`);
    this.index += 1;
    if (!_.isNil(word)) {
      this.word = word;
    }
  }

  next() {
    const translations = _.map(this.word.translations, translation => translation.translatedText.toLowerCase());
    if (_.includes(translations, this.translate.value.toLowerCase())) {
      this.translate.setErrors(null)
      this.takeWord();
    } else {
      this.translate.setErrors({'incorrect': true})
    }
  }
}
