import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArtisteService, Artiste } from '../../services/artiste.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artiste-form',
  templateUrl: './artiste-form.component.html',
  standalone: false,
  styleUrls: ['./artiste-form.component.css']
})
export class ArtisteFormComponent implements OnInit {
  artisteForm: FormGroup;
  isEditMode = false;
  artisteId?: number;

  constructor(
    private fb: FormBuilder,
    private artisteService: ArtisteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.artisteForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.artisteId = +params['id'];
        this.artisteService.getArtisteById(this.artisteId).subscribe(artiste => {
          this.artisteForm.patchValue(artiste);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.artisteForm.invalid) {
      return;
    }
    const artiste: Artiste = this.artisteForm.value;
    if (this.isEditMode && this.artisteId) {
      this.artisteService.updateArtiste(this.artisteId, artiste).subscribe(() => {
        this.router.navigate(['/artistes']);
      });
    } else {
      this.artisteService.createArtiste(artiste).subscribe(() => {
        this.router.navigate(['/artistes']);
      });
    }
  }
}
