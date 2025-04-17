import { Component, OnInit } from '@angular/core';
import { ConcertService, Concert } from '../../services/concert.service';

@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  standalone: false,
  styleUrls: ['./concert-list.component.css']
})
export class ConcertListComponent implements OnInit {
  concerts: Concert[] = [];

  constructor(private concertService: ConcertService) { }

  ngOnInit(): void {
    this.loadConcerts();
  }

  loadConcerts(): void {
    this.concertService.getConcerts().subscribe({
      next: (data: Concert[]) => {
        this.concerts = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des concerts', error);
      },
      complete: () => {
        console.log('Chargement terminé');
      }
    });
  }

  supprimerConcert(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer le concert n°' + id + ' ?')) {
      this.concertService.deleteConcert(id).subscribe(() => {
        this.loadConcerts();  // Recharger la liste après suppression
      }, error => {
        console.error('Erreur lors de la suppression :', error);
      });
    }
  }
}
