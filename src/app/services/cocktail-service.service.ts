import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor(private http: HttpClient) { }

  /**Buscar por nombres de bebidas*/
  getCards(nombre: string) {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`)
  }
  /**Mostrar una bebida random*/
  getRand() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  }
  /**Buscar ingredientes por nombre*/
  getCardsbyIngredient(ingrediente: string) {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingrediente}`)
  }
}
