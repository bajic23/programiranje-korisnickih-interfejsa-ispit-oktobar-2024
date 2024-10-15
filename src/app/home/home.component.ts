//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatListModule,MatInputModule,MatSelectModule,NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public movies: string[]=[
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
