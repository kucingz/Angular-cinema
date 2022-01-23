import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MovieModel } from '../models/Movie';
import { Movie } from '../Movie';
import { MovieService } from '../services/movie.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css'],
})
export class MovieAddComponent implements OnInit {
  movieForm!: FormGroup;
  movielist: Movie[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private movieService: MovieService,
    private location: Location
  ) {
    this.movieForm = this.formbuilder.group({
      title: new FormControl([], [Validators.required]),
      description: new FormControl([], [Validators.required]),
      duration: new FormControl(
        [],
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ),
      image: new FormControl([], [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .subscribe((movielist) => (this.movielist = movielist));
  }

  get title() {
    return this.movieForm.get('title');
  }
  get duration() {
    return this.movieForm.get('duration');
  }
  get description() {
    return this.movieForm.get('description');
  }
  get image() {
    return this.movieForm.get('image');
  }
  onAddMovie() {
    let movie: MovieModel = new MovieModel(
      this.movieForm.value.title,
      this.movieForm.value.image,
      this.movieForm.value.duration,
      this.movieForm.value.description
    );

    this.movieService
      .addMovie(movie)
      .subscribe((movielist) => this.movielist.push(movie));
    alert('Succes! You have added a movie');
    this.movieForm.reset();
    this.location.back();
  }
}
