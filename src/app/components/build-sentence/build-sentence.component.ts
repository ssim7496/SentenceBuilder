import { SentencesService } from './../common/services/sentences.service';
import { WordsService } from './../common/services/words.service';
import { WordTypesService } from './../common/services/word-types.service';
import { Component, Input } from '@angular/core';
import { WordType } from '../common/models/wordType.model';
import { Word } from '../common/models/word.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build-sentence',
  templateUrl: './build-sentence.component.html',
  styleUrls: ['./build-sentence.component.css']
})
export class BuildSentenceComponent {
  wordTypes: WordType[] = [];
  words: Word[] = [];
  sentence: string = '';

  constructor(private readonly wordTypeService: WordTypesService,
    private readonly wordsService: WordsService,
    private readonly sentencesService: SentencesService,
    private readonly router: Router) {
  }

  ngOnInit(): void {
    this.getWordTypes();
    this.getWords();
  }

  getWordTypes() : void {
    this.wordTypeService.getWordTypes()
      .subscribe((response) => {
        this.wordTypes = response;
      });
  }

  getWords() : void {
    this.wordsService.getWords()
      .subscribe((response) => {
        this.words = response;
      });
  }

  wordTypesFound(): boolean {
    return this.wordTypes && this.wordTypes.length > 0;
  }

  wordsFound(): boolean {
    return this.words && this.words.length > 0;
  }

  wordTypeClicked(index: number): void {
    this.wordsService.getWords()
      .subscribe((response) => {
        this.words = response.filter(w => w.wordTypeID === this.wordTypes[index].id);
      });
  }

  wordClicked(index: number): void {
    this.sentence += `${this.words[index].description} `;
  }

  getSentence(): string {
    return this.sentence === null || this.sentence === "" ? "Your sentence comes here" : this.sentence;
  }

  saveSentence() : void {
    if (this.sentence === null || this.sentence === "") {
      
    } else {
      this.sentencesService.addSentence({description: this.sentence})
        .subscribe((response) => {
          if (response.length > 0) {
            this.router.navigate(['sentences']);
          } else {
            alert('Sentence could not be added');
          }
        });

      this.sentence = '';
      this.getWordTypes();
      this.getWords();
    }
  }
}
