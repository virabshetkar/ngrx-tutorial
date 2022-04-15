import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterFeature } from './counter.reducers';

@NgModule({
  imports: [StoreModule.forFeature(counterFeature)],
  exports: [],
})
export class CounterStoreModule {}
