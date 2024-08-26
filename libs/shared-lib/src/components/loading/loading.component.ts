import { delay } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingService } from '../../services';

@Component({
  selector: 'lib-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  loading$ = this._loadingService.loading$.pipe(delay(0));

  constructor(private _loadingService: LoadingService) {}
}
