import {Translation} from "./translate";

export class Word {
  value: string;
  language: string;
  description: string;
  translations: Translation[];
  createdDate: string;

  constructor(word: string, language: string, translations: Translation[], description?: string) {
    this.value = word;
    this.language = language;
    this.description = description;
    this.translations = translations;
    this.createdDate = new Date().toISOString().split('T')[0];
  }
}
