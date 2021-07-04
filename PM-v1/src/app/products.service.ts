import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  getItems() {
    const url = "http://localhost:3000/api/items"
    const stream: Observable<any> = this.http.get(url)
    return stream;
  }

}
