import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LangService } from '@ng-mf-example/shared-lib';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  constructor(private _langService: LangService) {}

  handleLangChange(lang: string) {
    this._langService.updateLang(lang);
  }
}
