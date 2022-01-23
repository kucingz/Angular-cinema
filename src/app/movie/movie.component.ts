import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../Movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;

  @Output() onDeleteMovie: EventEmitter<Movie> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(movie: Movie) {
    this.onDeleteMovie.emit(movie);
  }
}
