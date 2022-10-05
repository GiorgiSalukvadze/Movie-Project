import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { SearchService } from 'src/app/shared/service/search.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  id: any;
  works: boolean;
  data: any;
  cast: any;
  crew: any;
  constructor(
    private route: ActivatedRoute,
    private http: ApiService,
    private router: Router,
    private search: SearchService
  ) {}

  ngOnInit(): void {
    this.search.mustOpen$.next(false);
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.getMovie(this.id);
    });

    this.http.getCast(this.id).subscribe((res) => {
      this.works = false;
      this.cast = res.cast;
      console.log(res);
    });
  }

  getMovie(id: number): void {
    this.http.getMovie(id).subscribe(
      (res: any) => {
        this.data = res;
        this.works = true;
        console.log(res);
      },
      (error) => {
        if (error.status == 404) {
          this.works = false;
          alert("Opss.. Couldn't find a movie!");
          this.router.navigate;
        } else {
          this.works = false;
          alert('Opss.. Something went wrong!');
        }
      }
    );
  }
}
