import { combineReducers } from '@ngrx/store';

import { UIAppRootReducer as ui } from './ui';
import { productReducer as products } from './product.reducer';
import { productDetailReducer as productDetail } from './product-detail.reducer';

export const userRootReducer = combineReducers({
  products,
  productDetail,
  ui
});