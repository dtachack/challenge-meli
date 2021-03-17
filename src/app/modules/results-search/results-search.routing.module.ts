import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ResultsSearchComponent } from './results-search.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ResultsSearchComponent
    }
  ])],
  exports: [RouterModule]
})
export class ResultsSearchRoutingModule { }
