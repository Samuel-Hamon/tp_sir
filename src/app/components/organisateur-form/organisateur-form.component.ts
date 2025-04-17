import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrganisateurService, Organisateur } from '../../services/organisateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organisateur-form',
  templateUrl: './organisateur-form.component.html',
  standalone: false,
  styleUrls: ['./organisateur-form.component.css']
})
export class OrganisateurFormComponent implements OnInit {
  organisateurForm: FormGroup;
  isEditMode = false;
  organisateurId?: number;

  constructor(
    private fb: FormBuilder,
    private organisateurService: OrganisateurService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.organisateurForm = this.fb.group({
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
        this.organisateurId = +params['id'];
        this.organisateurService.getOrganisateurById(this.organisateurId).subscribe(organisateur => {
          this.organisateurForm.patchValue(organisateur);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.organisateurForm.invalid) {
      this.organisateurForm.markAllAsTouched();
      return;
    }

    const formData = { ...this.organisateurForm.value };

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


    const organisateur: Organisateur = formData;

    if (this.isEditMode && this.organisateurId) {
      this.organisateurService.updateOrganisateur(this.organisateurId, organisateur).subscribe(() => {
        this.router.navigate(['/organisateurs']);
      });
    } else {
      this.organisateurService.createOrganisateur(organisateur).subscribe(() => {
        this.router.navigate(['/organisateurs']);
      });
    }
  }

}
