import { Component, OnInit } from '@angular/core';
import { TODOS } from '../../TODOS';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITodo } from '../../models/todos.interface';
import { TodosService } from '../../services/services.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodosService],
})
export class TodosComponent implements OnInit {

  todos = TODOS;
  test = 'SOME TEXT';
  // newTodo = new FormGroup({
  //   title: new FormControl('', Validators.required)
  // });

  newTodo: ITodo = {
    title: '',
    completed: false
  };

  constructor(
    private todosService: TodosService,
  ) { }

  ngOnInit() {
  }

  onAddingTodo() {
    // const newTodo: ITodo = {
    //   title: this.newTodo.value.title,
    //   completed: false
    // };
    // this._sendNewTodo(newTodo);
    // this.newTodo.setValue({
    //   title: ''
    // });

    // this._showNewTodo(this.newTodo.value as ITodo);

    this._sendNewTodo(this.newTodo);
  }

  private _sendNewTodo(todo: ITodo) {
    const newTodo = { ...todo };
    TodosService.push(newTodo);
  }
}
