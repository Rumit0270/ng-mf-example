import { RouterModule } from '@angular/router';
import { Component, OnInit, effect } from '@angular/core';
import { LangService } from '@ng-mf-example/shared-lib';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mfe1-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterModule],
  providers: [],
})
export class RootComponent implements OnInit {
  constructor(
    private _langService: LangService,
    private _translateService: TranslateService
  ) {
    effect(() => {
      this._translateService.use(this._langService.currentLang());
    });
  }

  ngOnInit(): void {
    this._translateService.use(this._langService.currentLang());
  }
}
