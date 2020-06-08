import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {SettingsService} from "./settings.service";
import {environment} from 'src/environments/environment';
import {TranslateResponse} from "../domain/translate";
import {catchError, retry} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private apiHost = environment.translateApiHost;
  private apiKey = environment.gcApiKey;

  constructor(private http: HttpClient, private settingsService: SettingsService) {
  }

  private getUrl(target: string, query: string) {
    return `${this.apiHost}?target=${target}&key=${this.apiKey}&q=${query}`;
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

  translate(word: string) {
    const target = this.settingsService.getLearnLanguage().toLowerCase().split('-')[0];
    return this.http.get<TranslateResponse>(this.getUrl(target, word)).pipe(
      retry(3),
      catchError(TranslateService.handleError)
    );
  }
}
