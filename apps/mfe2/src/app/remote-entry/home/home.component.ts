import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent, LogService } from '@ng-mf-example/shared-lib';

import {
  incrementCount,
  decrementCount,
  CountPartialState,
  COUNT_FEATURE_KEY,
} from '@ng-mf-example/data-store';

@Component({
  selector: 'mfe2-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public count$!: Observable<number>;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _logService: LogService,
    private _store: Store<CountPartialState>
  ) {
    this.count$ = _store
      .select(COUNT_FEATURE_KEY)
      .pipe(map((count) => count.value));
  }

  handleClick() {
    this._logService.log('Loading details...');
    this._router.navigate(['details'], { relativeTo: this._route });
  }

  increment() {
    this._store.dispatch(incrementCount());
  }

  decrement() {
    this._store.dispatch(decrementCount());
  }
}
