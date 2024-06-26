import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutUserComponent } from './ajout-user/ajout-user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
    AjoutUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
