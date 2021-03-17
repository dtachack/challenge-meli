import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: ':id',
      component: ProductDetailComponent
    }
  ])],
  exports: [RouterModule]
})
export class ProductDetailRoutingModule { }
