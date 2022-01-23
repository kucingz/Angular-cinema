import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmShowsComponent } from './film-shows.component';

describe('FilmShowsComponent', () => {
  let component: FilmShowsComponent;
  let fixture: ComponentFixture<FilmShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
