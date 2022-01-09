import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Film } from '../Film';
import { Filmy } from '../filmy-mock';

@Component({
  selector: 'app-filmy',
  templateUrl: './filmy.component.html',
  styleUrls: ['./filmy.component.css']
})
export class FilmyComponent implements OnInit {
  filmList = Filmy;
  headers: string[] = [];
  title = null;
  selectedFilm: Film = new Film("","","",new Date('2020-09-25'), '', 0); 
  newFilm: Film | undefined;

  constructor(public dialog: MatDialog){
    this.filmList.forEach(el => {
      const keys = Object.keys(el);
      keys.forEach(key => {
        if (!this.headers.includes(key)) {
          console.log(key);
          this.headers.push(key);
        }
      });
    });
  }


  ngOnInit(): void {
  }

  onSelect(film: Film): void {
    this.selectedFilm = film;
  }


}


