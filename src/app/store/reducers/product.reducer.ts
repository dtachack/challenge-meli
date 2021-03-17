import { Action, createReducer, on } from '@ngrx/store';

import { ProductResult } from 'src/app/models/product';
import { fetchSearchSuccesAction } from '../actions/product.actions';

export const initialState: ProductResult = {} as ProductResult;

const featureReducer = createReducer(
  initialState,
  on(fetchSearchSuccesAction, (state, { products }) => products)
);

export const productReducer = (state: ProductResult | undefined, action: Action): ProductResult => {
  return featureReducer(state, action);
};
