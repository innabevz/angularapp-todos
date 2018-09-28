import { Component, OnInit } from '@angular/core';
import { TodosComponent } from '../components/todos/todos.component';

@Component({
  selector: 'app-moduls',
  templateUrl: './moduls.component.html',
  styleUrls: ['./moduls.component.scss'],
  providers: [TodosComponent],
})
export class ModulsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
