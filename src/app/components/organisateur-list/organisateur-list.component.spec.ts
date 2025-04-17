import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisateurListComponent } from './organisateur-list.component';

describe('OrganisateurListComponent', () => {
  let component: OrganisateurListComponent;
  let fixture: ComponentFixture<OrganisateurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganisateurListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisateurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
