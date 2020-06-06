export interface TranslateResponse {
  translations: Translation[];
}

export interface Translation {
  translatedText: string;
  detectedSourceLanguage: string;
}
