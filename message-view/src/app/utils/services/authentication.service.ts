import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/authentificate`, { username: username, password: password}).pipe(
      map(user => {
        if(user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
