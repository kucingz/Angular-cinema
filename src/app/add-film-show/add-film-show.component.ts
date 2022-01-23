import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FilmShowModel } from '../models/FilmShow';
import { Movie } from '../Movie';
import { MovieService } from '../services/movie.service';
import { Location } from '@angular/common';
import { Room } from '../Room';
import { RoomService } from '../services/room.service';
@Component({
  selector: 'app-add-film-show',
  templateUrl: './add-film-show.component.html',
  styleUrls: ['./add-film-show.component.css'],
})
export class AddFilmShowComponent implements OnInit {
  @Input() date: Date;

  showForm!: FormGroup;
  movielist: Movie[] = [];
  rooms: Room[] = [];
  selectedMovie!: Movie;
  selectedRoom!: Room;

  constructor(
    private formbuilder: FormBuilder,
    private movieService: MovieService,
    private roomService: RoomService,
    private location: Location
  ) {
    this.showForm = this.formbuilder.group({
      title: new FormControl([], [Validators.required]),
      description: new FormControl([], [Validators.required]),
      duration: new FormControl(
        [],
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ),
      image: new FormControl([], [Validators.required]),
    });
    this.date = new Date();
  }

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .subscribe((movielist) => (this.movielist = movielist));
    this.roomService.getRooms().subscribe((rooms) => (this.rooms = rooms));
  }

  get duration() {
    return this.showForm.get('duration');
  }
  get image() {
    return this.showForm.get('image');
  }

  onClick(movie: Movie) {
    console.log(movie);
    this.selectedMovie = movie;
  }

  onRoomClick(room: Room) {
    console.log(room);
    this.selectedRoom = room;
  }

  onAddShow() {
    console.log(this.showForm.value.date);
    console.log(this.showForm.value.movieId);
    // let movie: FilmShowModel = new FilmShowModel(
    //   this.showForm.value.title,
    //   this.showForm.value.image,
    //   this.selectedRoom.id,
    //   this.selectedMovie.id
    // );
    // this.movieService
    //   .addMovie(movie)
    //   .subscribe((movielist) => this.movielist.push(movie));
    // alert('Succes! You have added a movie');
    // this.showForm.reset();
    // this.location.back();
  }
}
