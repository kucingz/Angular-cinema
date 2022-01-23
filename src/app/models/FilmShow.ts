import { Movie } from '../Movie';
import { Room } from '../Room';

export class FilmShowModel {
  public id: number;

  constructor(
    public date: string,
    public hour: string,
    public room: Room,
    public movie: Movie,
    id?: number
  ) {
    if (id) this.id = id;
    else this.id = 0;
  }

  get _id(): number {
    return this.id;
  }
  get _date(): string {
    return this.date;
  }
  get _room(): Room {
    return this.room;
  }
  get _movie(): Movie {
    return this.movie;
  }

  set _id(id: number) {
    this.id = id;
  }
  set _date(date: string) {
    this.date = date;
  }
  set _room(room: Room) {
    this.room = room;
  }
  set _movie(movie: Movie) {
    this.movie = movie;
  }
}
