import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarqueComponent } from './marque.component';
import { AjoutMarqueComponent } from './ajout-marque/ajout-marque.component';

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: MarqueComponent },
		{ path: 'ajout', component: AjoutMarqueComponent }
	])],
	exports: [RouterModule]
})
export class MarqueRoutingModule { }
