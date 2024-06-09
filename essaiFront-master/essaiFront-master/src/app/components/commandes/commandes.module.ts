import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeComponent } from './commandes.component';
import { CommandesRoutingModule } from './commandes-routing.module';

@NgModule({
  declarations: [
    CommandeComponent,
  ],
  imports: [
    CommonModule,
    CommandesRoutingModule
  ]
})
export class CommandesModule { }
