import { Component } from '@angular/core';
import { CocktailServiceService } from '../services/cocktail-service.service';
import { register } from 'swiper/element/bundle';
register();
interface Cock {
  dateModified: Date;
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string;
  strDrink: string;
  strDrinkAlternate: string;
  strDrinkThumb: string;
  strGlass: string;
  strIBA: string;
  strImageAttribution: string;
  strImageSource: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strInstructions: string;
  strInstructionsDE: string;
  strInstructionsES: string;
  strInstructionsFR: string;
  strInstructionsIT: string;
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cardsC: Cock[] = [];
  constructor(private cocktailS: CocktailServiceService,) {
    this.getBebidas();
  }
  getBebidas() {
    this.cardsC = [];
    this.cocktailS.getRand().subscribe((resp: any) => {
      console.log('Products', resp);
      this.cardsC = resp.drinks;
      this.cardsC.reverse();
      setTimeout(() => {
        this.getBebidas();
      }, 10000);
    });
  }

}
