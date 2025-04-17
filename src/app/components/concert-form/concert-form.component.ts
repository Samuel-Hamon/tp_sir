import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConcertService, Concert } from '../../services/concert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Artiste, ArtisteService } from '../../services/artiste.service';
import { Organisateur, OrganisateurService } from '../../services/organisateur.service';
import { GenreMusical, GenreMusicalService } from '../../services/genre-musical.service';

@Component({
  selector: 'app-concert-form',
  templateUrl: './concert-form.component.html',
  standalone: false,
  styleUrls: ['./concert-form.component.css']
})
export class ConcertFormComponent implements OnInit {
  concertForm: FormGroup;
  isEditMode = false;
  concertId?: number;
  artistes: Artiste[] = [];
  organisateurs: Organisateur[] = [];
  genreMusicals: GenreMusical[] = [];

  constructor(
    private fb: FormBuilder,
    private concertService: ConcertService,
    private artisteService: ArtisteService,
    private organisateurService: OrganisateurService,
    private genreMusicalService: GenreMusicalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.concertForm = this.fb.group({
      capacite: ['', Validators.required],
      description: ['', Validators.required],
      prix: [''],
      lieu: [''],
      date: [''],
      pays: [''],
      organisateurId: [''],
      genreMusicalId: [''],
      artistesIds: [[]]
    });
  }


  ngOnInit(): void {
    // Récupérer les artistes
    this.artisteService.getArtistes().subscribe(
      (data: Artiste[]) => {
        this.artistes = data;
      },
      error => {
        console.error('Erreur lors de la récupération des artistes', error);
      }
    );

    // Récupérer les organisateurs
    this.organisateurService.getOrganisateurs().subscribe(
      (data: Organisateur[]) => {
        this.organisateurs = data;
      },
      error => {
        console.error('Erreur lors de la récupération des organisateurs', error);
      }
    );

    // Récupérer les genres musicaux
    this.genreMusicalService.getGenreMusicals().subscribe(
      (data: GenreMusical[]) => {
        this.genreMusicals = data;
      },
      error => {
        console.error('Erreur lors de la récupération des genres musicaux', error);
      }
    );

    // Si on est en mode édition pour récupérer le concert existant
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.concertId = +params['id'];
        this.concertService.getConcertById(this.concertId).subscribe(concert => {
          this.concertForm.patchValue(concert);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.concertForm.invalid) {
      return;
    }

    const formData = { ...this.concertForm.value };

    if (formData.date) {
      const date = new Date(formData.date);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      formData.date = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }

    const concert: Concert = formData;

    if (this.isEditMode && this.concertId) {
      this.concertService.updateConcert(this.concertId, concert).subscribe(() => {
        this.router.navigate(['/concerts']);
      });
    } else {
      this.concertService.createConcert(concert).subscribe(() => {
        this.router.navigate(['/concerts']);
      });
    }
  }

}
