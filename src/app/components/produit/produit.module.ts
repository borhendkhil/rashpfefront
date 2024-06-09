import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeProdComponent } from './liste-prod/liste-prod.component';
import { ProdFormComponent } from './prod-form/prod-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListeComponent } from './category-liste/category-liste.component';
import { MarqueListeComponent } from './marque-liste/marque-liste.component';
import { MarqueFormComponent } from './marque-form/marque-form.component';
import { RouterModule, Routes } from '@angular/router';
import {StockComponent} from "./stock/stock.component";
import {AjoutStockComponent} from "./stock/ajout-stock/ajout-stock.component";

const routes:Routes=[
  { path:'', component:ListeProdComponent},
  { path:'form', component: ProdFormComponent},
  { path:'categories', component:CategoryListeComponent},
  { path:'categories/form', component: CategoryFormComponent},
  { path:'marques', component:MarqueListeComponent},
  { path:'marques/form', component:MarqueFormComponent},
  { path:'stock/etat', component:StockComponent},
  { path:'marques/form', component:AjoutStockComponent},
]

@NgModule({
  declarations: [
    ListeProdComponent,
    ProdFormComponent,
    CategoryFormComponent,
    CategoryListeComponent,
    MarqueListeComponent,
    MarqueFormComponent,
    StockComponent,
    AjoutStockComponent

  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ProduitModule { }
