import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'mfe1-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private _translateService: TranslateService) {}
}
