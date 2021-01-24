import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ProductBase, ProductFull} from './product';
import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductBase[]> {
    return this.http.get(environment.apiUrl + 'products')
      .pipe(
        map(response => {
          const value = response as ProductBase[];
          const result: ProductBase[] = [];
          value.forEach(element => {
            result.push(new ProductBase(element.id, element.name));
          });
          return result;
        })
      );
  }

  getProduct(productId: number): Observable<ProductFull> {
    return this.http.get(`${environment.apiUrl + 'products'}/${productId}`)
      .pipe(
        map(response => {
          const value = response as ProductFull;
          return new ProductFull(value.id, value.name, value.price, value.description);
        })
      );
  }

  putProduct(product: ProductFull): Observable<any> {
    return this.http.put(`${environment.apiUrl + 'products'}/${product.id}`, product);
  }

}
