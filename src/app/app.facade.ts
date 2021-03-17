import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { appRootSelector } from './store/selectors/app.selector';
import { fetchDetailProductAction, fetchSearchAction } from './store/actions/product.actions';
import { appUISelector } from './store/selectors/ui/ui.selector';
import { AppState } from './store/state/app.state';
import { Product, ProductResult } from './models/product';

@Injectable()
export class AppFacade {

  constructor(private store: Store<AppState>) { }

  public products$: Observable<ProductResult> = this.store.pipe(
    select(appRootSelector),
    map(state => state.products)
  );

  public productDetail$: Observable<Product> = this.store.pipe(
    select(appRootSelector),
    map(state => state.productDetail)
  );

  public isLoading$: Observable<boolean> = this.store.pipe(
    select(appUISelector),
    map(state => state.isLoading)
  );

  public fetchSearch(filter: string): void {
    this.store.dispatch(fetchSearchAction({ filter }));
  }

  public fetchDetailProduct(id: string): void {
    this.store.dispatch(fetchDetailProductAction({ id }));
  }

}