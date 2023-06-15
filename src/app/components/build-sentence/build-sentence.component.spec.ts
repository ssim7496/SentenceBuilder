import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSentenceComponent } from './build-sentence.component';

describe('BuildSentenceComponent', () => {
  let component: BuildSentenceComponent;
  let fixture: ComponentFixture<BuildSentenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildSentenceComponent]
    });
    fixture = TestBed.createComponent(BuildSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
