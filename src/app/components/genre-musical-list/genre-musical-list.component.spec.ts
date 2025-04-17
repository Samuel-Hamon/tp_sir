import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreMusicalListComponent } from './genre-musical-list.component';

describe('GenreMusicalListComponent', () => {
  let component: GenreMusicalListComponent;
  let fixture: ComponentFixture<GenreMusicalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenreMusicalListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreMusicalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
