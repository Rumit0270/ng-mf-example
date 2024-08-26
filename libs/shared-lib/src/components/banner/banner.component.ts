import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `<h1 translate>BANNER.TEXT</h1>`,
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent {}
