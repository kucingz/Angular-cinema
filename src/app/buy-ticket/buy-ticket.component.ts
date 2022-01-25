import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Params, Router } from '@angular/router';
import { BuyTicketFormComponent } from '../buy-ticket-form/buy-ticket-form.component';
import { FilmShow } from '../FilmShow';
import { FilmshowService } from '../services/filmshow.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
})
export class BuyTicketComponent implements OnInit {
  fakeArray: any;
  filmshows: FilmShow[] = [];
  myParam: string;
  constructor(
    private router: Router,
    private filmshowService: FilmshowService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    console.log(this.filmshows);
  }
  openDialog(index: number, filmshow: FilmShow) {
    const dialogRef = this.dialog.open(BuyTicketFormComponent);
    dialogRef.componentInstance.index = index;
    dialogRef.componentInstance.filmshow = filmshow;
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => (this.myParam = params['filmshowId'])
    );
    this.fakeArray = new Array(
      parseInt(this.router.url.substring(this.router.url.indexOf('F') + 1))
    );
    this.filmshowService
      .getFilmShows()
      .subscribe((filmshows) => (this.filmshows = filmshows));
  }
}
