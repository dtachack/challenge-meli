import { createSelector } from '@ngrx/store';

import { appRootSelector } from '../app.selector';
import { AppState } from '../../state/app.state';

export const appUISelector = createSelector(
    appRootSelector,
  (state: AppState) => state.ui
);
