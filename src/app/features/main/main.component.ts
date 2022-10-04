import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { ApiService } from '../../shared/service/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  movies: any;
  images: any = [];
  autoSlide: boolean = true;
  interval = 3000;
  selectedIndex: number = 0;
  indicators: boolean = true;

  constructor(private http: ApiService, private router: Router) {}

  Math = Math;
  ngOnInit(): void {
    this.http.getUsers().subscribe((res) => {
      console.log(res.results);
      this.movies = res.results;
      this.movies.map((res: any) => {
        this.images.push(res.poster_path);
      });
    });
    if (this.autoSlide) {
      this.nextImage();
    }
  }

  onClick(): void {
    let selectedMovie = this.movies.find(
      (item: any) => item.poster_path === this.images[this.selectedIndex]
    );
    this.router.navigate(['/movie/' + selectedMovie.id]);
  }

  nextImage(): void {
    setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  selectedImage(index: number): void {
    this.selectedIndex = index;
  }
  nextSlide(): void {
    if (this.selectedIndex == this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
