import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BannerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
