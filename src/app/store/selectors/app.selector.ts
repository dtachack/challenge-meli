import { createFeatureSelector } from '@ngrx/store';

import { appFeatureName, AppState } from '../state/app.state';

export const appRootSelector = createFeatureSelector<AppState>(appFeatureName);
