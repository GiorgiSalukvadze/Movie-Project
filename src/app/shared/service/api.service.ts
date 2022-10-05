import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = 'e340f66524306d7a08361463e378a358';
  movieName: string;
  mustOpen: boolean = false;

  userUrl: string =
    'https://api.themoviedb.org/3/trending/all/week?api_key=e340f66524306d7a08361463e378a358';

  movieNameSet(name: string) {
    this.movieName = name;
  }

  getUsers() {
    return this.http.get(this.userUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getMovie(id: Number) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e340f66524306d7a08361463e378a358`
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getCast(id: Number) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e340f66524306d7a08361463e378a358`
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  searchMovie() {
    return this.http
      .get(
        `${this.baseUrl}search/movie?api_key=${this.apiKey}&language=en-US&query=${this.movieName}&page=1&include_adult=false`
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
