import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LangService, LogService } from '@ng-mf-example/shared-lib';

import { environment } from '../environments/environment';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  constructor(
    private _logService: LogService,
    private _langService: LangService
  ) {}

  ngOnInit() {
    this._logService.log('Using environment:', environment);
  }

  handleLangChange(lang: string) {
    this._langService.updateLang(lang);
  }
}
