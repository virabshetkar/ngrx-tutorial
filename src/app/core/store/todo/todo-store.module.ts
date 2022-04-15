import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEffects } from './todo.effects';
import { todoFeature } from './todo.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(todoFeature),
    EffectsModule.forFeature([TodoEffects]),
  ],
  exports: [],
})
export class TodoStoreModule {}
