import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmShowComponent } from './film-show.component';

describe('FilmShowComponent', () => {
  let component: FilmShowComponent;
  let fixture: ComponentFixture<FilmShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
