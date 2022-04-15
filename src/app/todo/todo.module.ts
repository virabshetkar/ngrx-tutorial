import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoRoutingModule } from './todo-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoStoreModule } from '../core/store/todo/todo-store.module';

@NgModule({
  declarations: [
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoCreateComponent,
    TodoEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    MaterialModule,
    TodoStoreModule,
  ],
})
export class TodoModule {}
