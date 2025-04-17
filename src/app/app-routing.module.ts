import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtisteListComponent } from './components/artiste-list/artiste-list.component';
import { ArtisteFormComponent } from './components/artiste-form/artiste-form.component';
import { ConcertListComponent } from './components/concert-list/concert-list.component';
import { ConcertFormComponent } from './components/concert-form/concert-form.component';
import { OrganisateurListComponent } from './components/organisateur-list/organisateur-list.component';
import { OrganisateurFormComponent } from './components/organisateur-form/organisateur-form.component';
import { GenreMusicalListComponent } from './components/genre-musical-list/genre-musical-list.component';
import { GenreMusicalFormComponent } from './components/genre-musical-form/genre-musical-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/artistes', pathMatch: 'full' },
  { path: 'artistes', component: ArtisteListComponent },
  { path: 'artistes/new', component: ArtisteFormComponent },
  { path: 'artistes/edit/:id', component: ArtisteFormComponent },
  { path: 'concerts', component: ConcertListComponent },
  { path: 'concerts/new', component: ConcertFormComponent },
  { path: 'concerts/edit/:id', component: ConcertFormComponent },
  { path: 'organisateurs', component: OrganisateurListComponent },
  { path: 'organisateurs/new', component: OrganisateurFormComponent },
  { path: 'organisateurs/edit/:id', component: OrganisateurFormComponent },
  { path: 'genreMusicals', component: GenreMusicalListComponent },
  { path: 'genreMusicals/new', component: GenreMusicalFormComponent },
  { path: 'genreMusicals/edit/:id', component: GenreMusicalFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
