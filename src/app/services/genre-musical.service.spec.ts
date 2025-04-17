import { TestBed } from '@angular/core/testing';

import { GenreMusicalService } from './genre-musical.service';

describe('GenreMusicalService', () => {
  let service: GenreMusicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreMusicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
