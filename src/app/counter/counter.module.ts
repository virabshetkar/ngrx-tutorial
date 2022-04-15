import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { MaterialModule } from '../material/material.module';
import { CounterRoutingModule } from './counter-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterFeature } from '../core/store/counter/counter.reducers';
import { CounterStoreModule } from '../core/store/counter/counter-store.module';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    MaterialModule,
    CounterStoreModule,
  ],
})
export class CounterModule {}
