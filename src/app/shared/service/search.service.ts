import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  mustOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  resetValue$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  mustOpen(): BehaviorSubject<boolean> {
    return this.mustOpen$;
  }
  resetValue(): BehaviorSubject<boolean> {
    return this.resetValue$;
  }

  constructor() {}
}
