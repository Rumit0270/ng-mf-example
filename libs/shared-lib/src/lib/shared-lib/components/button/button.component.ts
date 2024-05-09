import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[lib-button]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @HostBinding('class') classes = 'lib-button';
}
