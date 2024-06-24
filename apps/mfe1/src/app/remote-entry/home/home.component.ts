import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  incrementCount,
  decrementCount,
  COUNT_FEATURE_KEY,
  CountPartialState,
} from '@ng-mf-example/data-store';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent, LogService } from '@ng-mf-example/shared-lib';

@Component({
  selector: 'mfe1-app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslateModule],
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
    this._logService.log('Loading todos...');
    this._router.navigate(['todos'], { relativeTo: this._route });
  }

  increment() {
    this._store.dispatch(incrementCount());
  }

  decrement() {
    this._store.dispatch(decrementCount());
  }
}
