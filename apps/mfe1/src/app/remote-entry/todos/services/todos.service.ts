import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todos.model';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  fetchTodos() {
    return this.http.get<Todo[]>(API_URL);
  }
}
