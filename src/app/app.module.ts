import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtisteListComponent } from './components/artiste-list/artiste-list.component';
import { ArtisteFormComponent } from './components/artiste-form/artiste-form.component';
import { ConcertFormComponent } from './components/concert-form/concert-form.component';
import { ConcertListComponent } from './components/concert-list/concert-list.component';
import { OrganisateurListComponent } from './components/organisateur-list/organisateur-list.component';
import { OrganisateurFormComponent } from './components/organisateur-form/organisateur-form.component';
import { GenreMusicalListComponent } from './components/genre-musical-list/genre-musical-list.component';
import { GenreMusicalFormComponent } from './components/genre-musical-form/genre-musical-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtisteListComponent,
    ArtisteFormComponent,
    ConcertFormComponent,
    ConcertListComponent,
    OrganisateurListComponent,
    OrganisateurFormComponent,
    GenreMusicalListComponent,
    GenreMusicalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
