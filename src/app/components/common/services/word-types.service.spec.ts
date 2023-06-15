import { TestBed } from '@angular/core/testing';

import { WordTypesService } from './word-types.service';

describe('WordTypesService', () => {
  let service: WordTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
