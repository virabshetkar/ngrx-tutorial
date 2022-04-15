import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({}), EffectsModule.forRoot([])],
  exports: [MaterialModule],
})
export class CoreModule {}
