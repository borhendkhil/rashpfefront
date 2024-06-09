import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.scss']
})
export class MarqueComponent implements OnInit {

  marques: Marque[] = [];

  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.getAllMarques();
  }

  getAllMarques(): void {
    this.marqueService.getAllMarques().subscribe(
      response => {
        this.marques = response;
      },
      error => {
        console.error('Erreur lors de la récupération des marques', error);
      }
    );
  }
}
