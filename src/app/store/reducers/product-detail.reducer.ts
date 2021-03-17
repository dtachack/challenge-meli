import { Action, createReducer, on } from '@ngrx/store';

import { Product, ProductResult } from 'src/app/models/product';
import { fetchDetailSearchSuccesAction, fetchSearchSuccesAction } from '../actions/product.actions';

export const initialState: Product = {} as Product;

const featureReducer = createReducer(
  initialState,
  on(fetchDetailSearchSuccesAction, (state, { product }) => product)
);

export const productDetailReducer = (state: Product | undefined, action: Action): Product => {
  return featureReducer(state, action);
};
