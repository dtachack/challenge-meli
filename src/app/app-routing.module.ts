import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'items', loadChildren: () =>
      import('./modules/results-search/results-search.module').then(m => m.ResultsSearchModule),
  },
  {
    path: 'items', loadChildren: () =>
      import('./modules/product-detail/product-detail.module').then(m => m.ProductDetailModule),
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
