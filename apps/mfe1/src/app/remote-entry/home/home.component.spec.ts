import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterModule, TranslateModule.forRoot()],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
        provideMockStore({}),
      ],
    }).compileComponents();

    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to todos on button click', () => {
    const routerSpy = jest.spyOn(router, 'navigate');
    const button = fixture.nativeElement.querySelector('#btn-view-todos');

    button.click();

    expect(routerSpy).toHaveBeenCalledWith(['todos'], {
      relativeTo: {},
    });
  });
});
