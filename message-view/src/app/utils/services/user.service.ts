import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUsers } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IUsers[]>(`${this.baseUrl}/users`);
  };

  getById(_id: string) {
    return this.http.get<IUsers>(`${this.baseUrl}/users/${_id}`);
  };

  create(user: IUsers) {
    return this.http.post(`${this.baseUrl}/users/register`, user);
  };

  update(user: IUsers) {
    return this.http.put(`${this.baseUrl}/users/${user._id}`, user);
  };

  delete(_id: string) {
    return this.http.delete(`${this.baseUrl}/users/${_id}`);
  };
}
