import { of } from 'rxjs';

export class MockTodosService {
  fetchTodos() {
    return of([
      {
        completed: false,
        id: 1,
        title: 'Do Laundry',
        userId: 1,
      },
    ]);
  }
}
