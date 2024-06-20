import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosService } from './services/todos.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Todo } from './models/todos.model';
@Component({
  selector: 'mfe1-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private _destroyRef: DestroyRef,
    private _todosService: TodosService
  ) {}

  ngOnInit() {
    this.loadTodos();
  }

  private loadTodos() {
    this._todosService
      .fetchTodos()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((res) => {
        this.todos = res;
      });
  }
}
