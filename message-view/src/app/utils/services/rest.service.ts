import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, Subject } from 'rxjs';
import * as _ from 'lodash';
import { IMessage } from '../models/models'


@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = 'http://localhost:3000';
  editSubject: Subject<any>;

  secondInterval: Observable<Number>;
  constructor(
    private http: HttpClient) {
      this.secondInterval = interval(15000);
      this.editSubject = new Subject;
     }

  getMessages(): Observable<any> {
    return this.http.get(`${this.baseUrl}/messages`);
  };

  createMessage(message): Observable<any> {
    const currentUser = localStorage.getItem('currentUser');
    _.set(message, 'user', _.get(JSON.parse(currentUser), 'username'));
    return this.http.post(`${this.baseUrl}/messages`, message);
  }

  updateMessage(message, id): Observable<any>  {
    return this.http.put(`${this.baseUrl}/messages/${id}`, message);
  }

  deleteMessage(message): Observable<any>  {
    return this.http.delete(`${this.baseUrl}/messages/${message._id}`);
  }
}
