import { Action, createReducer, on } from '@ngrx/store';
import { fetchDetailProductAction, fetchDetailSearchSuccesAction, fetchSearchAction, fetchSearchNotResultAction, fetchSearchSuccesAction } from '../../actions/product.actions';

export const initialState = false;

const featureReducer = createReducer(
  initialState,
  on(fetchSearchAction, () => true),
  on(fetchSearchSuccesAction, () => false),
  on(fetchSearchNotResultAction, () => false),
  on(fetchDetailProductAction, () => true),
  on(fetchDetailSearchSuccesAction, () => false)
);

export const isLoadingReducer = (state: boolean | undefined, action: Action): boolean => {
  return featureReducer(state, action);
};
