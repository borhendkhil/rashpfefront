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
      },
      error => {
        console.error('Erreur lors de la récupération des commandes', error);
      }
    );
  }

  validerCommande(id: number): void {
    this.commandeService.validerCommande(id).subscribe(
      () => {
        console.log('Commande validée avec succès');
        // Recharger la liste des commandes après la validation
        this.getAllCommandes();
      },
      error => {
        console.error('Erreur lors de la validation de la commande', error);
      }
    );
  }
}
