import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, effect } from '@angular/core';

import { LangService } from '@ng-mf-example/shared-lib';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'mfe2-entry',
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent implements OnInit {
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
