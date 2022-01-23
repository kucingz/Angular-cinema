import { Movie } from './Movie';
import { Room } from './Room';

export interface FilmShow {
  date: string;
  room: Room;
  movie: Movie;
  id: number;
}
