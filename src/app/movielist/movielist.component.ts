import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../Movie';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  movielist: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .subscribe((movielist) => (this.movielist = movielist));
  }

  deleteMovie(movie: Movie) {
    this.movieService
      .deleteMovie(movie)
      .subscribe(
        () => (this.movielist = this.movielist.filter((m) => m.id !== movie.id))
      );
  }
}
