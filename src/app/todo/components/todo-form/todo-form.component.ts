import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, Observable, Subscription } from 'rxjs';
import { Todo } from '../../../core/models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit, OnDestroy {
  @Output() formSubmit = new EventEmitter<Todo>();
  @Input() title?: string = 'Create Todo';
  @Input() todo$?: Observable<Todo | undefined>;
  todoSubscription?: Subscription;
  todoForm?: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      id: this.fb.control(''),
      title: this.fb.control(''),
      description: this.fb.control(''),
    });
    this.todoSubscription = this.todo$
      ?.pipe(filter((x) => x !== undefined))
      .subscribe((todo) => (todo ? this.todoForm?.patchValue(todo) : null));
  }

  submitForm() {
    console.log('HERE');
    this.formSubmit.emit(this.todoForm?.value);
  }
  ngOnDestroy(): void {
    this.todoSubscription?.unsubscribe();
  }
}
