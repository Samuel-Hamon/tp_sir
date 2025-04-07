import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisteListComponent } from './artiste-list.component';

describe('ArtisteListComponent', () => {
  let component: ArtisteListComponent;
  let fixture: ComponentFixture<ArtisteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtisteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
