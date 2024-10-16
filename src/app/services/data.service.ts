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
  public getActors(): string[] {
    return [
      'Jelena Đokić, Živko Anočić',
      'Ando Sakura, Eita Nagayama',
      'Ekaterina Ageva,Anton Biryuko',
      'Yôsuke Kuroda',
      'Jason Patric, Daniel Roebuck',
      'Viktor Savić, Petar Božović',
      'Joaquin Phoenix, Lady Gaga',
      'Animirani film'
    ]
  }
  public getDates(): string[] {
    return [
      '25.10.2024 19:30',
      '26.10.2024 18:30',
      '27.10.2024 16:00',
      '27.10.2024 20:00',
      '28.10.2024 21:00',
      '29.10.2024 22:00',
      '29.10.2024 16:00',
      '30.10.2024 19:30',
      '1.11.2024 18:30',
      '1.11.2024 21:00'
    ]
  }

}
