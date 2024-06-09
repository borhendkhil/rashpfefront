import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { CategorieComponent } from './categorie.component';

@NgModule({
  declarations: [
    CategorieComponent,
    AjoutCategorieComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
