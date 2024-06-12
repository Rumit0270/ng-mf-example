import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { TodosService } from './todos.service';
import { environment } from '../../../../environments/environment';

describe('TodosService', () => {
  let service: TodosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch todos', () => {
    service.fetchTodos().subscribe();

    const req = httpMock.expectOne(`${environment.apiURL}/todos`);
    req.flush([]);
    expect(req.request.method).toBe('GET');
  });
});
