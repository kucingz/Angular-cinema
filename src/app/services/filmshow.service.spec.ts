import { TestBed } from '@angular/core/testing';

import { FilmshowService } from './filmshow.service';

describe('FilmshowService', () => {
  let service: FilmshowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmshowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
