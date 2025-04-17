import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreMusicalFormComponent } from './genre-musical-form.component';

describe('GenreMusicalFormComponent', () => {
  let component: GenreMusicalFormComponent;
  let fixture: ComponentFixture<GenreMusicalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenreMusicalFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreMusicalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
