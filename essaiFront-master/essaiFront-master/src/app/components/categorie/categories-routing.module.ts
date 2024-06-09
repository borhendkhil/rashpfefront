import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategorieComponent } from './categorie.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: CategorieComponent },
    { path: 'ajout', component: AjoutCategorieComponent }
	])],
	exports: [RouterModule]
})
export class CategoriesRoutingModule { }
