import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail.routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailPlaceholderComponent } from './product-detail-placeholder/product-detail-placeholder.component';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductDetailPlaceholderComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    BreadcrumbsModule
  ]
})
export class ProductDetailModule { }
