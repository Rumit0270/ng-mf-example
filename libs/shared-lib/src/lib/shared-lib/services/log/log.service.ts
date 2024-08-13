import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private _count = 0;

  log(message: string, ...args: any[]) {
    console.log(`LogService: ${this._count}`, message, ...args);
    this._count++;
  }
}
