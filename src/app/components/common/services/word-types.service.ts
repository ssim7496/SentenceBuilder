import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { controllers } from '../constants';
import { WordType } from '../models/wordType.model';

@Injectable({
  providedIn: 'root'
})
export class WordTypesService {

  constructor(private http: HttpClient) { }

  getWordTypes(): Observable<WordType[]> {
    return this.http.get<WordType[]>(`${environment.baseApiUrl}/${controllers.wordTypes}`);
  }
}
