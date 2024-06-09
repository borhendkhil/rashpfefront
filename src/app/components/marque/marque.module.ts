import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueRoutingModule } from './marque-routing.module';
import { MarqueComponent } from './marque.component';

@NgModule({
  declarations: [
    MarqueComponent,
  ],
  imports: [
    CommonModule,
    MarqueRoutingModule
  ]
})
export class MarqueModule { }
