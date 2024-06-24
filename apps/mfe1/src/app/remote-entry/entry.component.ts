import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'mfe1-entry',
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {
  constructor(private _translateService: TranslateService) {}
}
