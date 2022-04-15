import { createFeatureSelector } from '@ngrx/store';

export const counterSelector = createFeatureSelector<number>('counter');
