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
      nationalite: [''],
      dateNaissance: [''],
      email: [''],
      tel: ['']
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

    const formData = { ...this.artisteForm.value };

    if (formData.dateNaissance) {
      const date = new Date(formData.dateNaissance);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      formData.dateNaissance = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }


    const artiste: Artiste = formData;

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
