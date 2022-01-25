import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmShow } from '../FilmShow';
import { FilmshowService } from '../services/filmshow.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-buy-ticket-form',
  templateUrl: './buy-ticket-form.component.html',
  styleUrls: ['./buy-ticket-form.component.css'],
})
export class BuyTicketFormComponent implements OnInit {
  filmshows: FilmShow[] = [];
  public index: number;
  public filmshow: FilmShow;

  constructor(
    private filmshowService: FilmshowService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.filmshowService
      .getFilmShows()
      .subscribe((filmshows) => (this.filmshows = filmshows));
  }

  onClick(filmshow: FilmShow, index: number) {
    const tmp = filmshow;
    tmp.room.reservedSeats.push(index);
    console.log(tmp.room.reservedSeats);
    this.filmshowService
      .reservePlace(tmp)
      .subscribe(() => this.location.back());
    alert('Succes! You have reserved a seat');
  }
}
