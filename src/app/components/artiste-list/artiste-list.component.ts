import { Component, OnInit } from '@angular/core';
import { ArtisteService, Artiste } from '../../services/artiste.service';

@Component({
  selector: 'app-artiste-list',
  templateUrl: './artiste-list.component.html',
  standalone: false,
  styleUrls: ['./artiste-list.component.css']
})
export class ArtisteListComponent implements OnInit {
  artistes: Artiste[] = [];

  constructor(private artisteService: ArtisteService) { }

  ngOnInit(): void {
    this.loadArtistes();
  }

  loadArtistes(): void {
    this.artisteService.getArtistes().subscribe({
      next: (data: Artiste[]) => {
        this.artistes = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des artistes', error);
      },
      complete: () => {
        console.log('Chargement terminé');
      }
    });    
  }

  supprimerArtiste(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet artiste ?')) {
      this.artisteService.deleteArtiste(id).subscribe(() => {
        this.loadArtistes();  // Recharger la liste après suppression
      });
    }
  }
}
