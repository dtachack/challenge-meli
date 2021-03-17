import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AppFacade } from 'src/app/app.facade';
import { ProductResult } from 'src/app/models/product';

@Component({
  selector: 'app-results-search',
  templateUrl: './results-search.component.html',
  styleUrls: ['./results-search.component.sass']
})
export class ResultsSearchComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appFacade: AppFacade
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route
        .queryParams
        .subscribe(queryParams => {
          const filter = this.route.snapshot.queryParamMap.get('search');
          if (!!filter)
            this.appFacade.fetchSearch(filter);
          else
            this.router.navigateByUrl('/');
        }));;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  get products$(): Observable<ProductResult> {
    return this.appFacade.products$;
  }

  get isLoading$(): Observable<boolean> {
    return this.appFacade.isLoading$;
  }

  public onDetail(id: string) {
    this.router.navigate([`/items`, id]);
  }
}
