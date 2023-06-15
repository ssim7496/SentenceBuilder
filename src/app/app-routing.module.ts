import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentencesListComponent } from './components/sentences/sentences-list/sentences-list.component';
import { BuildSentenceComponent } from './components/build-sentence/build-sentence.component';

const routes: Routes = [
  {
    path: '',
    component: SentencesListComponent
  },
  {
    path: 'sentences',
    component: SentencesListComponent
  },
  {
    path: 'build-a-sentence',
    component: BuildSentenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
