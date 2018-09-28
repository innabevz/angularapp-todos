import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { TodoComponent } from './components/todo/todo.component';
import { TodoEditorComponent } from './components/todo-editor/todo-editor.component';
import { TodosService } from './services/services.component';
import { ModulsComponent } from './moduls/moduls.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    // TodosComponent,
    TodoComponent,
    TodoEditorComponent,
    TodosService,
    ModulsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
