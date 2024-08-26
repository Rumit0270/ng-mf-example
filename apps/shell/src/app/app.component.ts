import {
  Router,
  RouterModule,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
} from '@angular/router';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import {
  LogService,
  LangService,
  LoadingService,
  LoadingComponent,
} from '@ng-mf-example/shared-lib';

import { environment } from '../environments/environment';

@Component({
  standalone: true,
  imports: [RouterModule, LoadingComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  constructor(
    private _router: Router,
    private _logService: LogService,
    private _destroyRef: DestroyRef,
    private _langService: LangService,
    private _loadingService: LoadingService
  ) {}

  ngOnInit() {
    this._logService.log('Using environment:', environment);
    this.listenForLazyLoadedModules();
  }

  handleLangChange(lang: string) {
    this._langService.updateLang(lang);
  }

  // Show Loading indicator when lazy loaded modules are being loaded via router
  private listenForLazyLoadedModules() {
    this._router.events
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((event) => {
        if (event instanceof RouteConfigLoadStart) {
          this._loadingService.updateLoading(true);
        }

        if (event instanceof RouteConfigLoadEnd) {
          this._loadingService.updateLoading(false);
        }
      });
  }
}
