import { Component, OnInit } from '@angular/core';
import { FilmShow } from '../FilmShow';
import { FilmshowService } from '../services/filmshow.service';

@Component({
  selector: 'app-film-shows',
  templateUrl: './film-shows.component.html',
  styleUrls: ['./film-shows.component.css'],
})
export class FilmShowsComponent implements OnInit {
  filmshows: FilmShow[] = [];

  constructor(private filmshowService: FilmshowService) {}

  ngOnInit(): void {
    this.filmshowService
      .getFilmShows()
      .subscribe((filmshows) => (this.filmshows = filmshows));
  }
}
