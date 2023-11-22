import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardsComponent } from './cards/cards.component';
import { CardIngredientesComponent } from './card-ingredientes/card-ingredientes.component';



@NgModule({
  declarations: [
    CardsComponent,
    CardIngredientesComponent
  ],
  exports:[
    CardsComponent,
    CardIngredientesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
