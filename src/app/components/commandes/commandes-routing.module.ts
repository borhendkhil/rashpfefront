import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommandeComponent } from './commandes.component';

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: CommandeComponent }
	])],
	exports: [RouterModule]
})
export class CommandesRoutingModule { }
