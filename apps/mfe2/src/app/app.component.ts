import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LoadingComponent, LogService } from '@ng-mf-example/shared-lib';

import { environment } from '../environments/environment';

@Component({
  standalone: true,
  imports: [RouterModule, LoadingComponent],
  selector: 'mfe2-root',
  template: ` <lib-loading></lib-loading>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(
    private _logService: LogService,
    private _translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this._logService.log('Using environment:', environment);
  }
}
