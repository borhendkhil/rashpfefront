import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: Categorie[] = [];

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categorieService.getAllCategories().subscribe(
      response => {
        this.categories = response;
      },
      error => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    );
  }

  addCategorie(categorie: Categorie): void {
    this.categorieService.addCategorie(categorie).subscribe(
      () => {
        console.log('Catégorie ajoutée avec succès');
        // Recharger la liste des catégories après l'ajout
        this.getAllCategories();
      },
      error => {
        console.error('Erreur lors de l\'ajout de la catégorie', error);
      }
    );
  }

  updateCategorie(id: number, categorie: Categorie): void {
    this.categorieService.updateCategorie(id, categorie).subscribe(
      () => {
        console.log('Catégorie mise à jour avec succès');
        // Recharger la liste des catégories après la mise à jour
        this.getAllCategories();
      },
      error => {
        console.error('Erreur lors de la mise à jour de la catégorie', error);
      }
    );
  }

  deleteCategorie(id: number): void {
    this.categorieService.deleteCategorie(id).subscribe(
      () => {
        console.log('Catégorie supprimée avec succès');
        // Recharger la liste des catégories après la suppression
        this.getAllCategories();
      },
      error => {
        console.error('Erreur lors de la suppression de la catégorie', error);
      }
    );
  }
}
