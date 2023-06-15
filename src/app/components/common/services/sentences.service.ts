import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Sentence } from '../models/sentence.model';
import { controllers } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class SentencesService {

  constructor(private http: HttpClient) { }

  getSentences(): Observable<Sentence[]> {
    return this.http.get<Sentence[]>(`${environment.baseApiUrl}/${controllers.sentences}`);
  }

  addSentence(sentence: Sentence): Observable<Sentence[]> {
    return this.http.post<Sentence[]>(`${environment.baseApiUrl}/${controllers.sentences}`, sentence);
  }
}
