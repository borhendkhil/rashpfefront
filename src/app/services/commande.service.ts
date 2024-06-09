import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Assurez-vous que le chemin est correct
import { Commande } from '../models/commande'; // Assurez-vous que le chemin est correct pour votre modèle Commande

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiUrl = environment.apiUrl; // URL de base de votre API

  constructor(private http: HttpClient) { }

  getAllCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.apiUrl}/api/v1/commande`);
  }

  validerCommande(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/v1/commande/commande/valider/${id}`, {});
  }

  getCommandeById(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${this.apiUrl}/api/v1/commande/commande/${id}`);
  }
}
