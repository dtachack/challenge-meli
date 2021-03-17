import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { empty, Observable, of, zip } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';

import { AppService } from 'src/app/services/app.service';
import { fetchDetailProductAction, fetchDetailSearchSuccesAction, fetchSearchAction, fetchSearchNotResultAction, fetchSearchSuccesAction } from '../actions/product.actions';
import { ProductResult } from 'src/app/models/product';
import { productDetail, resultSearch } from 'src/app/mappers/product.mapper';

@Injectable()
export class UserStoreEffects {

  constructor(
    private action$: Actions,
    private service: AppService) { }

  fetchSearchAction$: Observable<Action> = createEffect(() => this.action$
    .pipe(
      ofType(fetchSearchAction),
      switchMap(action => this.service.search(action.filter)),
      mergeMap(result => {
        console.log(result);
        if (!!result && result?.paging?.total === 0)
          return [fetchSearchNotResultAction({ products: {} as ProductResult })]
        else
          return [
            fetchSearchSuccesAction({ products: resultSearch(result) })
          ];
      }
      )
    ));

  fetchDetailProductAction$: Observable<Action> = createEffect(() => this.action$
    .pipe(
      ofType(fetchDetailProductAction),
      switchMap(action => {
        return zip(
          this.service.detailProduct(action.id),
          this.service.descriptionProduct(action.id)
        )
      }),
      mergeMap(([detail, description]) => {
        console.log(detail);
        console.log(description);
        return [fetchDetailSearchSuccesAction({ product: productDetail(detail, description) })]
      }
      )
    ));
}
