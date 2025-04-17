import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisateurFormComponent } from './organisateur-form.component';

describe('OrganisateurFormComponent', () => {
  let component: OrganisateurFormComponent;
  let fixture: ComponentFixture<OrganisateurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganisateurFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisateurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
