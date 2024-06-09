import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import { AjoutRoleComponent } from './ajout-role/ajout-role.component';

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: RolesComponent },
		{ path: 'ajout', component: AjoutRoleComponent }

	])],
	exports: [RouterModule]
})
export class RolesRoutingModule { }
