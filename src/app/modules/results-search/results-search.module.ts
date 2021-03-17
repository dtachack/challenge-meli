import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsSearchComponent } from './results-search.component';
import { ResultsSearchRoutingModule } from './results-search.routing.module';
import { ResultProductComponent } from './components/result-product/result-product.component';
import { ResultProductPlaceholderComponent } from './components/result-product-placeholder/result-product-placeholder.component';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';


@NgModule({
  declarations: [ResultsSearchComponent, ResultProductComponent, ResultProductPlaceholderComponent],
  imports: [
    CommonModule,
    ResultsSearchRoutingModule,
    BreadcrumbsModule
  ]
})
export class ResultsSearchModule { }
