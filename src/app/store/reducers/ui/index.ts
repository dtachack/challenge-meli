import { combineReducers } from '@ngrx/store';

import { isLoadingReducer as isLoading} from './product.ui.reducer';

export const UIAppRootReducer = combineReducers({
    isLoading
});
