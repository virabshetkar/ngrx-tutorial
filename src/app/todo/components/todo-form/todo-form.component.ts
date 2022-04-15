import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../../../core/models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<Todo>();
  @Input() title?: string = 'Create Todo';
  @Input() todo?: Todo = { title: '', description: '', id: 0 };
  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = fb.group({
      id: fb.control(0),
      title: fb.control(''),
      description: fb.control(''),
    });
  }

  ngOnInit(): void {
    if (this.todo) this.todoForm.setValue(this.todo);
  }

  submitForm() {
    this.formSubmit.emit(this.todoForm.value);
  }
}
