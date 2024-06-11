import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterModule],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[handleClick] should navigate to details', () => {
    const routerSpy = jest.spyOn(router, 'navigate');
    const buttonEl = fixture.nativeElement.querySelector('#btn-view-details');

    buttonEl.click();

    expect(routerSpy).toHaveBeenCalledWith(['details'], {
      relativeTo: {},
    });
  });
});
