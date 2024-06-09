import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutRoleComponent } from './ajout-role/ajout-role.component';

@NgModule({
  declarations: [
    RolesComponent,
    AjoutRoleComponent,
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RolesModule { }
