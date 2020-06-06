import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VocabularyService} from "../../services/vocabulary.service";
import {StoreService} from "../../services/store.service";
import {SettingsService} from "../../services/settings.service";
import {FormControl} from "@angular/forms";
import * as _ from 'lodash';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {
  wordGroups = [];
  word = new FormControl();
  description = new FormControl();

  constructor(
    private modalService: NgbModal,
    private vocabularyService: VocabularyService,
    private storeService: StoreService,
    private settingsService: SettingsService
  ) {
  }

  ngOnInit(): void {
    this.getAllWords();
  }

  openModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  addNew() {
    this.storeService.storeWord(this.word.value, this.description.value)
    this.modalService.dismissAll();
  }

  getAllWords() {
    const wordsGroupedByCreationDate = _.groupBy(this.vocabularyService.getAll(), 'createdDate');
    const dates = _.keys(wordsGroupedByCreationDate);
    const unsortedWords = _.map(dates, date => {
      const words = _.map(wordsGroupedByCreationDate[date], word => ({
        value: _.defaultTo(_.get(word, 'value'), ''),
        translation: _.map(_.defaultTo(_.get(word, 'translations'), []), 'translatedText').join(', '),
        description: _.defaultTo(_.get(word, 'description'), '')
      }));
      return {
        rawDate: date,
        date: new Date(date).toLocaleDateString(this.settingsService.getNativeLanguage(), {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        vocabulary: [...words]
      }
    });
    this.wordGroups = _.orderBy(unsortedWords, ['rawDate'], ['desc']);
  }
}
