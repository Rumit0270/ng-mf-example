import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private _count = 0;

  log(message: string) {
    console.log(`LogService: ${this._count}`, message);
    this._count++;
  }
}
