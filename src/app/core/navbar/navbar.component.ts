import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import { SearchService } from 'src/app/shared/service/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  movieName: string;
  formGroup: FormGroup;
  searchedMovies: any;

  constructor(private api: ApiService, private search: SearchService) {}

  ngOnInit(): void {
    this.search.mustOpen$.next(false);
    this.formGroup = new FormGroup({
      search: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
    this.search.mustOpen$.subscribe((res: any) => {
      if (res == false) {
        this.formGroup.reset();
      }
    });
  }

  getMovie(): void {
    this.api.movieNameSet(this.formGroup.get('search')?.value);
    this.api.searchMovie().subscribe((res: any) => {
      this.searchedMovies = res.results;
      this.search.mustOpen$.next(true);
      console.log(this.searchedMovies);
    });
  }
  searchLoad(): any {
    if (
      this.searchedMovies &&
      this.searchedMovies.length > 0 &&
      this.search.mustOpen$
    ) {
      return this.search.mustOpen();
    }
  }

  onClick(): void {
    this.search.mustOpen$.next(false);
    this.formGroup.reset();
  }

  logoClicked(): void {
    this.search.mustOpen$.next(false);
    this.formGroup.reset();
  }
  ngOnDestroy(): void {
    this.search.mustOpen$.unsubscribe();
  }
}
