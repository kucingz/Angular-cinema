import { Component, Input, OnInit } from '@angular/core';
import { FilmShow } from '../FilmShow';
import { Router } from '@angular/router';
@Component({
  selector: 'app-film-show',
  templateUrl: './film-show.component.html',
  styleUrls: ['./film-show.component.css'],
})
export class FilmShowComponent implements OnInit {
  @Input() filmshow: FilmShow;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ViewDetail(filmshowId: any, seats: any) {
    console.log(filmshowId);
    this.router.navigate(['/buy-ticket', filmshowId + '/' + seats]);
  }
}
