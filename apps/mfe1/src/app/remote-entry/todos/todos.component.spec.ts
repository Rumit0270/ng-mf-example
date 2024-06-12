import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodosService } from './services/todos.service';
import { MockTodosService } from './services/todos.service.mock';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  let todosService: TodosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosComponent],
      providers: [{ provide: TodosService, useClass: MockTodosService }],
    }).compileComponents();

    todosService = TestBed.inject(TodosService);

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render todos based on API response', () => {
    const todosSpy = jest.spyOn(todosService, 'fetchTodos');

    const compiled = fixture.nativeElement;

    component.ngOnInit();
    fixture.detectChanges();
    const node = compiled.querySelectorAll('li').item(0);

    expect(compiled.querySelectorAll('li').length).toBe(1);
    expect(node.textContent).toContain('Do Laundry');
    expect(todosSpy).toHaveBeenCalled();
  });
});
