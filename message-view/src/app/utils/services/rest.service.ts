import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { interval, Observable, Subject } from 'rxjs';
import * as _ from 'lodash';



@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = 'http://localhost:3000';


  secondInterval: Observable<Number>;
  constructor(
    private http: HttpClient) {
      this.secondInterval = interval(15000);
     }

  getMessages() {
    return this.http.get(`${this.baseUrl}/messages`).pipe(
      map(data => {
        return _.get(data, 'messages');
      })
    )
  };

  createMessage(message) {
    return this.http.post(`${this.baseUrl}/messages`, message)
  }

  updateMessage(message, id) {
    return this.http.put(`${this.baseUrl}/messages/${id}`, message)
  }

  deleteMessage(id) {
    return this.http.delete(`${this.baseUrl}/messages/${id}`)
  }
}
