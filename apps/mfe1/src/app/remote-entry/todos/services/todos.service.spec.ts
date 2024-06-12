import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { provideHttpClient } from '@angular/common/http';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
