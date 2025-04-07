import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtisteListComponent } from './components/artiste-list/artiste-list.component';
import { ArtisteFormComponent } from './components/artiste-form/artiste-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/artistes', pathMatch: 'full' },
  { path: 'artistes', component: ArtisteListComponent },
  { path: 'artistes/new', component: ArtisteFormComponent },
  { path: 'artistes/edit/:id', component: ArtisteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
