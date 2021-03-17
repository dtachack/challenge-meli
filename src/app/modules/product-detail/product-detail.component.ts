import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppFacade } from 'src/app/app.facade';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appFacade: AppFacade
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (!!id)
      this.appFacade.fetchDetailProduct(id);
    else
      this.router.navigateByUrl('/');

  }

  get product$(): Observable<Product> {
    return this.appFacade.productDetail$;
  }

  get isLoading$(): Observable<boolean> {
    return this.appFacade.isLoading$;
  }

}
