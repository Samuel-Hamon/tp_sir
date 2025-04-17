import { Component, OnInit } from '@angular/core';
import { GenreMusicalService, GenreMusical } from '../../services/genre-musical.service';

@Component({
  selector: 'app-artiste-list',
  templateUrl: './genre-musical-list.component.html',
  standalone: false,
  styleUrls: ['./genre-musical-list.component.css']
})
export class GenreMusicalListComponent implements OnInit {
  genreMusicals: GenreMusical[] = [];

  constructor(private genreMusicalService: GenreMusicalService) { }

  ngOnInit(): void {
    this.loadGenreMusicals();
  }

  loadGenreMusicals(): void {
    this.genreMusicalService.getGenreMusicals().subscribe({
      next: (data: GenreMusical[]) => {
        this.genreMusicals = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des genres musicaux', error);
      },
      complete: () => {
        console.log('Chargement terminé');
      }
    });    
  }

  supprimerGenreMusical(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer le genre musical n°' + id + ' ?')) {
      this.genreMusicalService.deleteGenreMusical(id).subscribe(() => {
        this.loadGenreMusicals();  // Recharger la liste après suppression
      });
    }
  }
}
