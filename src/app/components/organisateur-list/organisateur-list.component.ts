import { Component, OnInit } from '@angular/core';
import { OrganisateurService, Organisateur } from '../../services/organisateur.service';

@Component({
  selector: 'app-organisateur-list',
  templateUrl: './organisateur-list.component.html',
  standalone: false,
  styleUrls: ['./organisateur-list.component.css']
})
export class OrganisateurListComponent implements OnInit {
  organisateurs: Organisateur[] = [];

  constructor(private organisateurService: OrganisateurService) { }

  ngOnInit(): void {
    this.loadOrganisateurs();
  }

  loadOrganisateurs(): void {
    this.organisateurService.getOrganisateurs().subscribe({
      next: (data: Organisateur[]) => {
        this.organisateurs = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des organisateurs', error);
      },
      complete: () => {
        console.log('Chargement terminé', this.organisateurs);
      }
    });    
  }

  supprimerOrganisateur(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet organisateur n°' + id + ' ?')) {
      this.organisateurService.deleteOrganisateur(id).subscribe(() => {
        this.loadOrganisateurs();  // Recharger la liste après suppression
      });
    }
  }
}
