import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as urlTemplate from 'url-template';

import { AppApi } from '../app.api';
import { ProductDescriptionResponse, ProductDetailResponse, ProductResultResponse } from '../models/product-response';


@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  public search(filter: string): Observable<ProductResultResponse> {
    return this.http.get<ProductResultResponse>(`${urlTemplate.parse(AppApi.search).expand({ filter })}`);
  }

  public detailProduct(id: string): Observable<ProductDetailResponse> {
    return this.http.get<ProductDetailResponse>(`${urlTemplate.parse(AppApi.detail).expand({ id })}`);
  }

  public descriptionProduct(id: string): Observable<ProductDescriptionResponse> {
    return this.http.get<ProductDescriptionResponse>(`${urlTemplate.parse(AppApi.description).expand({ id })}`);
  }
}
