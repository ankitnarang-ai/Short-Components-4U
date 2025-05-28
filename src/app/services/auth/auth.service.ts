// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.BASE_URL; 
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthStatus();
  }

  private checkAuthStatus(): void {
    // Check if the user is authenticated by looking for a token in cookies
    this.isAuthenticatedSubject.next(document.cookie.includes('token='));
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  signup(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/public/signup`, userData, { 
      withCredentials: true
    }).pipe(
      tap(() => {
        this.isAuthenticatedSubject.next(true);
        this.router.navigate(['/']);
      })
    );
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/public/login`, credentials, { 
      withCredentials: true
    }).pipe(
      tap(() => {
        this.isAuthenticatedSubject.next(true);
        this.router.navigate(['/']);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { 
      withCredentials: true
    }).pipe(
      tap(() => {
        this.isAuthenticatedSubject.next(false);
        this.router.navigate(['/login']);
      })
    );
  }
}