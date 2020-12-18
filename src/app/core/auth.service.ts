import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable()
export class AuthService {

  currentUser: IUser | null;
  loginErr: boolean = false;
  get isLogged(): boolean {  return !!this.currentUser; }
  

  constructor(private http: HttpClient) { }
  

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`/users/profile`).pipe(
      tap(((user: IUser) => this.currentUser = user)),
      catchError(() => { this.currentUser = null; return [null]; })
    );
  }

  login(data: any): Observable<any> {
    return this.http.post(`/users/login`, data).pipe(
      tap((user: IUser) => {this.currentUser = user; console.log(this.currentUser + 'logina');})
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`/users/register`, data).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

  logout(): Observable<any> {
    return this.http.post(`/users/logout`, {}).pipe(
      tap(() => this.currentUser = null)
    );
  }

  updateProfile(data: any): Observable<IUser> {
    return this.http.put(`/users/profile`, data).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }
}