import { Injectable, signal } from '@angular/core';

// Service to notify lang change from shell to sub applications
@Injectable({
  providedIn: 'root',
})
export class LangService {
  public currentLang = signal<string>('en');

  updateLang(lang: string) {
    this.currentLang.set(lang);
  }
}
