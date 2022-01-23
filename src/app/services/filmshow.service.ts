import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmShow } from '../FilmShow';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FilmshowService {
  private apiUrl = 'http://localhost:5000/filmshows';

  constructor(private http: HttpClient) {}

  getFilmShows(): Observable<FilmShow[]> {
    return this.http.get<FilmShow[]>(this.apiUrl);
  }

  addFilmShows(filmshow: FilmShow): Observable<FilmShow> {
    return this.http.post<FilmShow>(this.apiUrl, filmshow, httpOptions);
  }
}
