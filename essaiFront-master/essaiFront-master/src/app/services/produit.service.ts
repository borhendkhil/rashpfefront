import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Assurez-vous que le chemin est correct
import { Produit } from '../models/produit'; // Assurez-vous que le chemin est correct pour votre modèle Produit

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = environment.apiUrl; // URL de base de votre API

  constructor(private http: HttpClient) { }

  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/api/v1/produit`);
  }

  addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.apiUrl}/api/v1/produit/add`, produit);
  }

  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/v1/produit/delete/${id}`);
  }

  updateProduit(id: number, produit: Produit): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/v1/produit/update/${id}`, produit);
  }

  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/api/v1/produit/${id}`);
  }

  getProduitByNom(nom: string): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/api/v1/produit/nom/${nom}`);
  }

  getProduitByCategorie(idcat: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/api/v1/produit/categorie/${idcat}`);
  }

  getProduitByMarque(idmarque: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/api/v1/produit/marque/${idmarque}`);
  }

  saveProduit(file: File, nomprod: string): Observable<Produit> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('nomprod', nomprod);
    return this.http.post<Produit>(`${this.apiUrl}/api/v1/produit/save`, formData);
  }
}
