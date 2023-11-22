import { Component, ElementRef, ViewChild } from '@angular/core';
import { CocktailServiceService } from '../services/cocktail-service.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cardsC: any = [];
  loading: boolean | undefined;
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor(private cocktailS: CocktailServiceService, private toastCtrl: ToastController,) {
   }

  async buscarC(): Promise<void> {
    this.loading = true;
    const valor = this.txtBuscar.nativeElement.value;
    if (!valor) {
      const toast = await this.toastCtrl.create({
        message: 'Lo sentimos es una busqueda vacia',
        color: 'warning',
        icon: 'help',
        duration: 2000,
        position: 'bottom',
      });
      toast.present();
      return;
    } else {
      this.cocktailS.getCards(valor).subscribe(async (cards: any) => {
        this.loading = false;
        console.log(cards);
        this.cardsC.push(...cards.drinks)
        const toast = await this.toastCtrl.create({
          message: 'Cóctel encontrado',
          color: 'success',
          icon: 'checkmark',
          duration: 2000,
          position: 'bottom',
        });
        toast.present();
      })
      this.txtBuscar.nativeElement.value = '';
    }
  }
}
