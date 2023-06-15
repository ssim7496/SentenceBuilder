import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentencesListComponent } from './components/sentences/sentences-list/sentences-list.component';
import { NavbarComponent } from './components/common/navbar/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BuildSentenceComponent } from './components/build-sentence/build-sentence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SentencesListComponent,
    NavbarComponent,
    BuildSentenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
