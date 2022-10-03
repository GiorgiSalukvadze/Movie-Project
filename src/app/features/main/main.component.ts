import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/service/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  movies: any;

  constructor(private http: ApiService) {}

  ngOnInit(): void {
    this.http.getUsers().subscribe((res) => {
      console.log(res.results);
      this.movies = res.results;
    });
  }
  onClick() {}
}
