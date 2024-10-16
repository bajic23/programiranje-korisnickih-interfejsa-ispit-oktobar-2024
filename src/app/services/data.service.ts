import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getMovies(): string[] {
    return [
      'Svemu dođe kraj',
      'Čudovište',
      'Male šape na velikom putovanju',
      'Leteći brod',
      'My Hero Academia: Ti si sledeći',
      'Terrifier 3',
      'Klinci kaubojci',
      'Megdan: između vode i vatre',
      'Neukrotivi robot',
      'DŽoker: ludilo u dvoje'
    ]
  }

  public getDirectors(): string[] {
    return [
      "Rajko Grlić",
      "Hirokazu Koreeda",
      "Kevin Donovan",
      "Ilya Uchitel",
      "Tensai Okamura",
      "Damien Leone",
      "Juan Jesús García Galocha",
      "Todor Chapkanov",
      "Chris Sanders",
      "Tod Filips"
    ]
  }
}
