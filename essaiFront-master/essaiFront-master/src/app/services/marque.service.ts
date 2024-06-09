import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Assurez-vous que le chemin est correct
import { Marque } from '../models/marque'; // Assurez-vous que le chemin est correct pour votre modèle Marque

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  private apiUrl = environment.apiUrl; // URL de base de votre API

  constructor(private http: HttpClient) { }

  getAllMarques(): Observable<Marque[]> {
    return this.http.get<Marque[]>(`${this.apiUrl}/api/v1/marque`);
  }

  addMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(`${this.apiUrl}/api/v1/marque/add`, marque);
  }

  updateMarque(id: number, marque: Marque): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/v1/marque/update/${id}`, marque);
  }

  deleteMarque(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/v1/marque/delete/${id}`);
  }

  saveMarque(file: File, name: string): Observable<Marque> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    return this.http.post<Marque>(`${this.apiUrl}/api/v1/marque/save`, formData);
  }
}
