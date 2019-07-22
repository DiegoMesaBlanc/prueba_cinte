import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Item } from '../common/models/Item';


const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient
  ) { }

  getItems(): any {
    return this.http.get<any>(apiUrl, { observe: 'response' }).toPromise()
      .then((res: HttpResponse<any>) => {
        return res;
      }).catch(err => {
        return err;
      });
  }
}
