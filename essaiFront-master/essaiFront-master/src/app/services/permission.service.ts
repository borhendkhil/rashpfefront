import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Assurez-vous que le chemin est correct
import { Permissions} from '../models/permission'; // Assurez-vous que le chemin est correct pour votre modèle Permission

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private apiUrl = environment.apiUrl; // URL de base de votre API

  constructor(private http: HttpClient) { }

  getAllPermissions(): Observable<Permissions[]> {
    return this.http.get<Permissions[]>(`${this.apiUrl}/permissions`);
  }

  getPermissionById(id: number): Observable<Permissions> {
    return this.http.get<Permissions>(`${this.apiUrl}/permissions/${id}`);
  }

  createPermission(permission: Permissions): Observable<Permissions> {
    return this.http.post<Permissions>(`${this.apiUrl}/permissions`, permission);
  }

  updatePermission(id: number, permission: Permissions): Observable<Permissions> {
    return this.http.put<Permissions>(`${this.apiUrl}/permissions/${id}`, permission);
  }

  deletePermission(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/permissions/${id}`);
  }
}
