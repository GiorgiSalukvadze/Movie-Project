import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url: string =
    'https://api.themoviedb.org/3/trending/all/week?api_key=e340f66524306d7a08361463e378a358';

  getUsers() {
    return this.http.get(this.url).pipe(
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
}
