import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Todo } from '../models/todos.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  fetchTodos() {
    return this.http.get<Todo[]>(`${environment.apiURL}/todos`);
  }
}
