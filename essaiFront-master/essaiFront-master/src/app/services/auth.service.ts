import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/v1/auth/login'; 

  constructor(private http: HttpClient) {}

  public getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  public login(username: string, password: string): Observable<any> {
    const body = { username, password }; 

    return this.http.post<any>(this.loginUrl, body).pipe(
      tap(response => {
        localStorage.setItem('accessToken', response.accessToken);
      })
    );
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
