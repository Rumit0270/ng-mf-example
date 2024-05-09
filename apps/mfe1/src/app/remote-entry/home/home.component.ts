import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { ButtonComponent, LogService } from '@ng-mf-example/shared-lib';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _logService: LogService
  ) {}

  handleClick() {
    this._logService.log('Loading todos...');
    this._router.navigate(['todos'], { relativeTo: this._route });
  }
}
