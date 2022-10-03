import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  id: any;

  data: any;
  cast: any;
  crew: any;
  constructor(
    private route: ActivatedRoute,
    private http: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.http.getMovie(this.id).subscribe(
      (res: any) => {
        this.data = res;
        console.log(res);
      },
      (error) => {
        if (error.status == 404) {
          alert("Opss.. Couldn't find a movie!");
          this.router.navigate;
        } else {
          alert('Opss.. Something went wrong!');
        }
      }
    );
    this.http.getCast(this.id).subscribe((res) => {
      this.cast = res.cast;
      this.crew = res.crew;
      console.log(res);
    });
  }
}
