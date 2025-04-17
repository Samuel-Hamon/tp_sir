import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenreMusicalService, GenreMusical } from '../../services/genre-musical.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-genre-musical-form',
  templateUrl: './genre-musical-form.component.html',
  standalone: false,
  styleUrls: ['./genre-musical-form.component.css']
})
export class GenreMusicalFormComponent implements OnInit {
  genreMusicalForm: FormGroup;
  isEditMode = false;
  genreMusicalId?: number;

  constructor(
    private fb: FormBuilder,
    private genreMusicalService: GenreMusicalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.genreMusicalForm = this.fb.group({
      nom: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.genreMusicalId = +params['id'];
        this.genreMusicalService.getGenreMusicalById(this.genreMusicalId).subscribe(genreMusical => {
          this.genreMusicalForm.patchValue(genreMusical);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.genreMusicalForm.invalid) {
      this.genreMusicalForm.markAllAsTouched();
      return;
    }

    const formData = { ...this.genreMusicalForm.value };

    const genreMusical: GenreMusical = formData;

    if (this.isEditMode && this.genreMusicalId) {
      this.genreMusicalService.updateGenreMusical(this.genreMusicalId, genreMusical).subscribe(() => {
        this.router.navigate(['/genreMusicals']);
      });
    } else {
      this.genreMusicalService.createGenreMusical(genreMusical).subscribe(() => {
        this.router.navigate(['/genreMusicals']);
      });
    }
  }

}
