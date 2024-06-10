import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Assurez-vous que le chemin est correct
import { User } from '../models/user'; // Assurez-vous que le chemin est correct pour votre modèle User

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl; // URL de base de votre API

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, user);
  }

  login(authRequestDTO: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, authRequestDTO);
  }

  getAllUsers(token: string): Observable<User[]> {
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<User[]>(`${this.apiUrl}/auth/users`, { headers });
}

  getUserProfile(): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/profile`, {});
  }

  refreshToken(token: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/refreshToken`, { token });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/auth/user/${id}`);
  }

  updateUser(id: number, user: User): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/auth/${id}`, user);
  }

  flagUser(id: number): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}auth/${id}/flag`, {});
  }
}
