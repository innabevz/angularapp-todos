import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {TODOS} from '../components/todos/todos.component';
import { ITodo } from '../models/todos.interface';

@Injectable ()

export class TodosService {
    constructor() { }

    getTodos () {
      return TODOS;
    }
    addTodo(newTodo: ITodo) {
      TODOS.push(newTodo);
      return;
    }
}
