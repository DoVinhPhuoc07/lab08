import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewProduct } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = 'https://662091423bf790e070b000c3.mockapi.io/products';

  constructor(private httpClient: HttpClient) {}

  addProduct(data: INewProduct): Observable<INewProduct> {
    return this.httpClient.post<INewProduct>(this.API_URL, data);
  }

  getProducts(): Observable<INewProduct[]> {
    return this.httpClient.get<INewProduct[]>(this.API_URL);
  }

  getProductById(id: string): Observable<INewProduct> {
    return this.httpClient.get<INewProduct>(this.API_URL + '/' + id);
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(this.API_URL + '/' + id);
  }

  updateProduct(id: string, data: INewProduct) {
    return this.httpClient.put(this.API_URL + '/' + id, data);
  }
}
