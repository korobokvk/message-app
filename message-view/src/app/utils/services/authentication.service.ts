import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl: string = 'http://localhost:3000';
  public subject: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/authentificate`, { username: username, password: password}).pipe(
      map(user => {
        if(user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        this.subject.next(user)
        return user;
      })
    );
  }

  logout() {
    this.subject.next(null)
    localStorage.removeItem('currentUser');
  }
}
