import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
} from '../core/store/counter/counter.actions';
import { counterSelector } from '../core/store/counter/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  value$ = this.store.select(counterSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {}

  increase() {
    this.store.dispatch(increment());
  }
  descrease() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
