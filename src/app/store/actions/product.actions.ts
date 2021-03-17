import { createAction, props } from '@ngrx/store';
import { type } from 'src/app/util';

import { Product, ProductResult } from 'src/app/models/product';

export const fetchSearchAction = createAction(type('[User/API] Fetch search products'), props<{ filter: string }>());
export const fetchSearchSuccesAction = createAction(type('[User/API] Fetch search products success'), props<{ products: ProductResult }>());
export const fetchSearchNotResultAction = createAction(type('[User/API] Fetch search products not result'), props<{ products: ProductResult }>());

export const fetchDetailProductAction = createAction(type('[User/API] Fetch detail product'), props<{ id: string }>());
export const fetchDetailSearchSuccesAction = createAction(type('[User/API] Fetch search produt detail success'), props<{ product: Product }>());

export const producActions = {
  fetchSearchAction: fetchSearchAction
};
