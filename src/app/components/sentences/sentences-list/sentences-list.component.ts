import { SentencesService } from './../../common/services/sentences.service';
import { Component, OnInit } from '@angular/core';
import { Sentence } from '../../common/models/sentence.model';

@Component({
  selector: 'app-sentences-list',
  templateUrl: './sentences-list.component.html',
  styleUrls: ['./sentences-list.component.css']
})
export class SentencesListComponent {
  sentences: Sentence[] = [];  

  constructor(private readonly sentenceService: SentencesService) { }

  ngOnInit(): void {
    this.sentenceService.getSentences()
      .subscribe({
        next: (response) => {
          this.sentences = response; 
        },
        error: (error) => {
          console.log(error)
        }
      });
  }

  sentencesFound() : boolean {
    return this.sentences && this.sentences.length > 0;
  }

}
