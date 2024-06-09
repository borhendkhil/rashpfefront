import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    this.clientService.getAllClients().subscribe(
      response => {
        this.clients = response;
      },
      error => {
        console.error('Erreur lors de la récupération des clients', error);
      }
    );
  }

  addClient(client: Client): void {
    this.clientService.addClient(client).subscribe(
      () => {
        console.log('Client ajouté avec succès');
        // Recharger la liste des clients après l'ajout
        this.getAllClients();
      },
      error => {
        console.error('Erreur lors de l\'ajout du client', error);
      }
    );
  }

  deactivateClient(id: number): void {
    this.clientService.deactivateClient(id).subscribe(
      () => {
        console.log('Client désactivé avec succès');
        // Recharger la liste des clients après la désactivation
        this.getAllClients();
      },
      error => {
        console.error('Erreur lors de la désactivation du client', error);
      }
    );
  }

  updateClient(id: number, client: Client): void {
    this.clientService.updateClient(id, client).subscribe(
      () => {
        console.log('Client mis à jour avec succès');
        // Recharger la liste des clients après la mise à jour
        this.getAllClients();
      },
      error => {
        console.error('Erreur lors de la mise à jour du client', error);
      }
    );
  }
}
