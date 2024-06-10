import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandeComponent implements OnInit {

  commandes: Commande[] = [];

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.getAllCommandes();
  }

  getAllCommandes(): void {
    this.commandeService.getAllCommandes().subscribe(
      response => {
        this.commandes = response;
        console.log('Commandes récupérées', this.commandes);
      },
      error => {
        console.error('Erreur lors de la récupération des commandes', error);
      }
    );
  }
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  validerCommande(id: number ): void {
    this.commandeService.validerCommande(this.getToken(),id).subscribe(
      () => {
        console.log('Commande validée avec succès');
        
        this.getAllCommandes();
      },
      error => {
        console.error('Erreur lors de la validation de la commande', error);
      }
    );
  }
  

}
