import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Assurez-vous que le chemin est correct
import { Categorie } from '../models/categorie'; // Assurez-vous que le chemin est correct pour votre modèle Categorie

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = environment.apiUrl; // URL de base de votre API

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.apiUrl}/v1/api/categorie`);
  }

  addCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.apiUrl}/v1/api/categorie/add`, categorie);
  }

  updateCategorie(id: number, categorie: Categorie): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/v1/api/categorie/${id}`, categorie);
  }

  deleteCategorie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/v1/api/categorie/delete/${id}`);
  }
}
