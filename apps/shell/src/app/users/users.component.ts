import { loadRemoteModule } from '@nx/angular/mf';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements AfterViewInit {
  @ViewChild('root') root!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    try {
      loadRemoteModule('mfe3', './Module').then((m) => {
        const rootElement = this.root.nativeElement;
        m.mount(rootElement);
      });
    } catch (error) {
      console.log('Erorr', error);
    }
  }
}
